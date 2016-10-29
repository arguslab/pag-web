---
layout: page
title: "Gradle Plugins"
---
{% include JB/setup %}

<div class="col-md-9" role="main" markdown="1">

<h1 class="page-header" id="gradle-plugins">
  Gradle Plugins
</h1>

<p class="lead" markdown="1">

We developed two gradle plugins ([jawa-plugin](https://plugins.gradle.org/plugin/org.argus.jawa) and
[android-jawa-plugin](https://plugins.gradle.org/plugin/org.argus.android-jawa))
for allowing Jawa language to build with java and android program.

</p>

<h2 id="jawa-plugin">The Jawa Plugin</h2>

The Jawa plugin extends the Java plugin to add support for Jawa projects.
It can deal with Jawa code, mixed Jawa and Java code, and even pure Java code (although we don't necessarily recommend to use it for the latter).
The plugin supports joint compilation, which allows you to freely mix and match Jawa and Java code,
with dependencies in both directions. For example, a Jawa class can extend a Java class that in turn extends a Jawa class.
This makes it possible to use the best language for the job, and to rewrite any class in the other language if needed.

<h3 id="jawa-usage">Usage</h3>

To use the Jawa plugin, include the following in your build script:

Build script snippet for use in all Gradle versions:

<pre><code class="gradle">buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "gradle.plugin.com.github.arguslab:gradle-jawa-plugin:VERSION"
  }
}

apply plugin: "org.argus.jawa"

dependencies {
    compile "com.github.arguslab:jawa-compiler_2.11:VERSION"
}
</code></pre>

Build script snippet for new, incubating, plugin mechanism introduced in Gradle 2.1:

<pre><code class="gradle">plugins {
  id "org.argus.jawa" version "VERSION"
}

dependencies {
    compile "com.github.arguslab:jawa-compiler_2.11:VERSION"
}
</code></pre>

<h3 id="jawa-tasks">Tasks</h3>

The Jawa plugin adds the following tasks to the project.

Table 1: Jawa plugin - tasks

| Task name            | Depends on           | Description                                        |
| -------------------- | -------------------- | -------------------------------------------------- |
| compileJawa          | compileJava          | Compiles production Jawa source files.             |
| compileTestJawa      | compileTestJava      | Compiles test Jawa source files.                   |
| compileSourceSetJawa | compileSourceSetJava	|	Compiles the given source set's Jawa source files. |


Table 2: Jawa plugin - additional task dependencies

| Task name        | Depends on            |
| ---------------- | --------------------- |
| classes          | compileJawa           |
| testClasses      | compileTestJawa       |
| sourceSetClasses |	compileSourceSetJawa |

Figure: Jawa plugin - tasks

TBA

<h3 id="jawa-layout">Project layout</h3>

The Jawa plugin assumes the project layout shown in `Table 3`.
All the Jawa source directories can contain Jawa and Java code.
The Java source directories may only contain Java source code.
None of these directories need to exist or have anything in them; the Jawa plugin will simply compile whatever it finds.

Table 3: Jawa plugin - project layout

| Directory	              | Meaning                      |
| ----------------------- | ---------------------------- |
| src/main/java	          | Production Java source       |
| src/main/resources      | Production resources         |
| src/main/jawa	          | Production Jawa sources. May also contain Java sources for joint compilation. |
| src/test/java	          | Test Java source             |
| src/test/resources      | Test resources               |
| src/test/jawa	          | Test Jawa sources. May also contain Java sources for joint compilation. |
| src/sourceSet/java      | Java source for the given source set |
| src/sourceSet/resources	| Resources for the given source set |
| src/sourceSet/jawa      | Jawa sources for the given source set. May also contain Java sources for joint compilation. |

<h3 id="jawa-changing">Changing the project layout</h3>

Just like the Java plugin, the Jawa plugin allows you to configure custom locations for Jawa production and test sources.

<pre><code class="gradle">sourceSets {
    main {
        jawa {
            srcDirs = ['src/jawa'] // default: "src/main/jawa"
        }
    }

    test {
        jawa {
            srcDirs = ['test/jawa'] // default: "src/test/jawa"
        }
    }
}
</code></pre>

<h2 id="android-jawa-plugin">The Android Jawa Plugin</h2>

The Android Jawa plugin extends the Android plugin to add support for Android projects.

<h3 id="android-jawa-usage">Usage</h3>

To use the Jawa plugin, include the following in your build script:

Build script snippet for use in all Gradle versions:

<pre><code class="gradle">buildscript {
  repositories {
    maven {
      url "https://plugins.gradle.org/m2/"
    }
  }
  dependencies {
    classpath "gradle.plugin.com.github.arguslab:gradle-android-jawa-plugin:VERSION"
  }
}

apply plugin: "org.argus.android-jawa"
</code></pre>

Build script snippet for new, incubating, plugin mechanism introduced in Gradle 2.1:

<pre><code class="gradle">plugins {
  id "org.argus.android-jawa" version "VERSION"
}
</code></pre>

<h3 id="android-jawa-changing">Changing the project layout</h3>

Just like the Android plugin, the Android Jawa plugin allows you to configure custom locations for Jawa production and test sources.

<pre><code class="gradle">android {
    sourceSets {
        main {
            scala {
                srcDir ['src/jawa'] // default: "src/main/jawa"
            }
        }

        androidTest {
            scala {
                srcDir ['androidTest/jawa'] // default: "src/androidTest/jawa"
            }
        }
    }
}
</code></pre>

<h3 id="android-jawa-full">Complete example</h3>

**build.gradle**

<pre><code class="gradle">// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        mavenCentral()
        maven {
            url "https://plugins.gradle.org/m2/"
        }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.0'
        classpath 'gradle.plugin.com.github.arguslab:gradle-android-jawa-plugin:1.0.4'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        jcenter()
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}
</code></pre>

**app/build.gradle**

<pre><code class="gradle">apply plugin: 'com.android.application'
apply plugin: 'org.argus.android-jawa'

android {
    compileSdkVersion 19
    buildToolsVersion "24.0.2"
    defaultConfig {
        applicationId "com.fgwei.test"
        minSdkVersion 8
        targetSdkVersion 19
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:appcompat-v7:19.1.0'
}

</code></pre>

</div>

<div class="col-md-3" role="complementary" markdown="1">
  <nav class="bs-docs-sidebar hidden-print hidden-sm hidden-xs">
    <ul class="nav bs-docs-sidenav">
      <li> <a href="#gradle-plugins">Gradle Plugins</a> </li>
      <li> <a href="#jawa-plugin">The Jawa Plugin</a>
        <ul class="nav">
          <li><a href="#jawa-usage">Usage</a></li>
          <li><a href="#jawa-tasks">Tasks</a></li>
          <li><a href="#jawa-layout">Project layout</a></li>
          <li><a href="#jawa-changing">Changing the project layout</a></li>
        </ul>
      </li>
      <li> <a href="#android-jawa-plugin">The Android Jawa Plugin</a>
        <ul class="nav">
          <li><a href="#android-jawa-usage">Usage</a></li>
          <li><a href="#android-jawa-changing">Changing the project layout</a></li>
          <li><a href="#android-jawa-full">Complete example</a></li>
        </ul>
      </li>
    </ul>
    <a href="#top" class="back-to-top"> Back to top </a>
  </nav>
</div>
