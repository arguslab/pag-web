---
layout: page
title: "Argus SAF"
---
{% include JB/setup %}

<div class="col-md-9" role="main" markdown="1">

<a href="https://github.com/arguslab/Argus-SAF"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>

<h1 class="page-header" id="Argus-SAF">
  Argus Static Analysis Framework
</h1>

<p class="lead" markdown="1">
Argus-SAF is a static analysis framework that we build in house to do
security vetting for Android applications.
It integrated two of our previously developed products [Argus-Jawa](#Argus-Jawa) and [Argus-Amandroid](#Argus-Amandroid),
and have the capability to perform comprehensive, efficient and highly precise Inter-component Data Flow Analysis.
</p>

<div class="bs-callout bs-callout-warning" id="argus-saf">
  <h4>Argus-SAF origin</h4>
  <p markdown="1">Please note that **Argus-SAF** was previously well-known as **Amandroid** [[pdf](http://people.cs.ksu.edu/~fgwei/resources/papers/AmandroidCCS14.pdf)], and published at [CCS'14](https://www.sigsac.org/ccs/CCS2014/).</p>
</div>


<h2 id="Argus-Jawa"> Argus-Jawa </h2>

Argus-Jawa is a general static analysis framework for our home-brewing intermediate representation (IR) language <a href="jawa-language">Jawa</a>.
Any java-like language (e.g., java, java bytecode, dalvik bytecode) can be analyzed if it have been
translated into Jawa.

It provides the ability to:
1. Parsing Jawa codes.
2. Load information from jar file and class file.
3. Build AST for jawa records (classes) and procedures (methods).
4. Resolving class hierarchy and class elements overwritten relationship.
5. Resolving virtual method invocation.

It can conduct/build:
1. Call Graph
2. Reaching Definition Analysis
3. Points-to Analysis
4. Monotonic Data Flow Analysis,
5. Reaching Facts Analysis
6. Intra-/Inter- procedural Control Flow Graph
7. Intra-/Inter- procedural Data Flow Graph
8. Data Dependence Analysis
9. Taint Analysis
10. Side Effect Analysis

<h2 id="Argus-Amandroid">Argus-Amandroid</h2>

<div class="bs-callout bs-callout-primary" id="amandroid">
  <h4>Amandroid meaning</h4>
  <p markdown="1">**Aman** means secure in Indonesian, so Amandroid means secure android.</p>
</div>

<h3 id="Argus-Amandroid-Overview">Overview</h3>

Amandroid is a static analysis framework for Android apps.

The Android platform is immensely popular.
However, malicious or vulnerable applications have been reported to cause several security problems.
Currently there is no effective method that a market operator can use to vet apps entering a market (e.g., Google Play).

Prior works using static analysis to address Android app security problems more focus on specific problems and
built specialized tools for them. We observe that a large portion of those security issues can be resolved by
addressing one underlying core problem – capturing semantic behaviors of the app such as object points-to and
control-/data-flow information.
Thus, we designed a new approach to conducting static analysis for vetting Android apps,
and built a generic framework, called Amandroid, which builds upon [Argus-Jawa](#Argus-Jawa) and
does flow- and context-sensitive data flow analysis in an inter-component way.

Our approach shows that a comprehensive (tracking all objects) static analysis method on Android apps is totally feasible
in terms of computation resources, and the Amandroid framework is flexible and easy to be extended for many types of
specialized security analyses.

Since Amandroid directly handles Inter-component control and data flows,
it can be used to address security problems that result from interactions among multiple components from
either the same or different apps. Amandroid analysis is sound in that it can provide assurance of the absence of
the specified security problems in an app with well-specified and reasonable assumptions on the Android runtime and its library.

On top of Amandroid we performed certain specific security analyses, for instance,

1. Sensitive data flow tracking
2. Data injection detection
3. API misuse checking

We apply those analyses on hundreds of apps collected from Google Play’s popular apps and a third-party security company,
and the results show that it is capable of finding real security issues and efficient enough in terms of analysis time.


<h3 id="Argus-Amandroid-Workflow">Amandroid Workflow</h3>

{% include image.html url="/assets/images/amandroid-pipeline.png" description="Figure: The pipeline of Amandroid framework." %}

Amandroid take an Android APK ``x`` as the input, then it works as following:

1. Extract ``x``, then parse ``*.dex`` file to ``Jawa-DeDexer`` module and other files (like ``*.xml``, ``resource.arsc``) to ``Preprocess`` module.
2. ``Jawa Dedexer`` in ``Dex2Jawa`` module decompile the ``*.dex`` file into **Jawa** format. Parsers in ``Preprocess`` module can provide app’s information to ``AppInfoCollector``.
Developer can specify what kind of information he/she is interested and non-interesting app can be ignored.
Finally, ``Preprocess`` module will output meta data of ``x``.
3. ``AndroidEnvironmentGenerator`` in ``EnvironmentBuilder`` is getting all sources codes and meta datas from previous step, then building the environment method for each of the component.
4. ``DataFlowFramework`` provide data flow analysis technics to examine data flow problems.
``AndroidReachingFactsAnalysis`` takes environment methods as the entry points and build **IDFG**.
``InterproceduralDataDependenceAnalysis`` takes **IDFG** and build **DDG**.
``AndroidDataDependentTaintAnalysis`` takes **DDG** and **SourceAndSinkManager** (provided by the developer) to do **taint analysis** and output taint result.
5. Developer specified plugin get all the result, then he/she can do further analysis or visualize it in certain way.

<div class="bs-callout bs-callout-primary" id="source-code">
  <p markdown="1">Please note that source codes and environment appeals above are all [Jawa](jawa-language) format.</p>
</div>

<h2 id="start">Getting Started</h2>

This section will help you to start with using Argus-CIT.

<h3 id="start-download">Download</h3>

`Requirement: Java 8`

1. Click: [![Download](https://api.bintray.com/packages/arguslab/maven/argus-saf/images/download.svg)](https://bintray.com/arguslab/maven/argus-saf/_latestVersion)
2. In arguslab bintray repo click `Files > Version Folder`
3. Download argus-saf_***-version-assembly.jar

<h3 id="start-run">Run</h3>

To run Argus-SAF, in a terminal command prompt, type:

```sh
$ java -jar argus-saf_***-version-assembly.jar
```

Above command will show you the usage of Argus-SAF.

There are several modes you can use:

```sh
Available Modes:
  a[picheck]    Detecting API misuse.
  d[ecompile]   Decompile Apk file(s).
  s[tage]       Stage middle results.
  t[aint]       Perform taint analysis on Apk(s).
```

Let's take taint analysis as an example, type:

```sh
$ java -jar argus-saf_***-version-assembly.jar t
```

It will show you the usage and available options:

```sh
usage: t[aint] [options] <file_apk/dir>
 -d,--debug            Output debug information.
 -f,--force            Force delete previous decompile result. [Default: false]
 -i,--ini <path>       Set .ini configuration file path.
 -mo,--module <name>   Taint analysis module to use. [Default: DATA_LEAKAGE, Choices: (COMMUNICATION_LEAKAGE,
                       OAUTH_TOKEN_TRACKING, PASSWORD_TRACKING, INTENT_INJECTION, DATA_LEAKAGE)]
 -o,--output <dir>     Set output directory. [Default: .]
```

Two notable options are `-mo,--module` and `-i,--ini`.
1. `-mo,--module` allows you to set the module you wanna use in the analysis. By default it set to **DATA_LEAKAGE** detection,
you can switch between different modules by specify this option.
2. `-i,--ini` allows you to specify the custom configuration file to use for the analysis, the detailed information will be
discussed in [Configuration File](#configuration-file).

<h3 id="start-test">Test</h3>
To make sure Argus-SAF running on your environment, you can execute it on our test apks,
which you can download from [ICC-Bench](https://github.com/fgwei/ICC-Bench/tree/master/apks).

The command to run is:

```sh
$ java -jar argus-saf_***-version-assembly.jar t -o /outputPath /path/icc-bench
```

<div class="bs-callout bs-callout-default" id="source-code">
  <h4>Install Amandroid Stash</h4>
  <p markdown="1">If you are first time use Argus-SAF, above test command will automatically download and install
  **Amandroid Stash** under path `~/.amandroid_stash`. It contains necessary android sdks and configuration files
  for Argus-SAF's analysis.</p>
</div>

More test apks you can find from [DroidBench](https://github.com/secure-software-engineering/DroidBench/tree/master/apk).

<h2 id="work">Working with Argus-SAF</h2>

Argus-SAF released two libraries: `jawa-core` and `amandroid-core`. Both of them are exist in the [Maven Central Repo](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22com.github.arguslab%22)

As aforementioned, `jawa-core` contains all the static analysis apis for analyzing [Jawa](jawa-language),
`amandroid-core` contains all the android related analyzing apis and tools.

<h3 id="work-obtain">Obtain Argus-SAF as Library</h3>

You can obtain Argus-SAF as library for your own project to build new static analysis tools.

Here, we suppose your project is a **SBT** project:

Depend on `jawa-core` by editing build.sbt:

```
libraryDependencies += "com.github.arguslab" %% "jawa-core" % VERSION
```

Depend on `amandroid-core` by editing build.sbt:

```
libraryDependencies += "com.github.arguslab" %% "amandroid-core" % VERSION
```

<div class="bs-callout bs-callout-warning" id="source-code">
  <h4> Note that:</h4>
  <p markdown="1"> 1. Depend on `amandroid-core` will automatically add `jawa-core` as dependency.</p>
  <p markdown="1"> 2. If you use **Maven** or **Gradle** as the build tool, you should translate it to corresponding format
  by following format in [Maven Central Repo](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22com.github.arguslab%22).</p>
  <p markdown="1"> 3. `VERSION` should change to current released version.</p>
</div>

<h2 id="tutorial-load">Tutorial: Load APK</h2>

TBA.

</div>

<div class="col-md-3" role="complementary" markdown="1">
  <nav class="bs-docs-sidebar hidden-print hidden-sm hidden-xs">
    <ul class="nav bs-docs-sidenav">
      <li> <a href="#Argus-SAF">Argus Static Analysis Framework</a> </li>
      <li> <a href="#Argus-Jawa">Argus-Jawa</a> </li>
      <li> <a href="#Argus-Amandroid">Argus-Amandroid</a>
        <ul class="nav">
          <li><a href="#Argus-Amandroid-Overview">Overview</a></li>
          <li><a href="#Argus-Amandroid-Workflow">Amandroid Workflow</a></li>
        </ul>
      </li>
      <li> <a href="#start">Getting Started</a>
        <ul class="nav">
          <li><a href="#start-download">Download</a></li>
          <li><a href="#start-run">Run</a></li>
          <li><a href="#start-test">Test</a></li>
        </ul>
      </li>
      <li> <a href="#work">Working with Argus-SAF</a>
        <ul class="nav">
          <li><a href="#work-obtain">Obtain Argus-SAF as Library</a></li>
        </ul>
      </li>
      <li> <a href="#tutorial-load">Tutorial: Load APK</a></li>
    </ul>
    <a href="#top" class="back-to-top"> Back to top </a>
  </nav>
</div>
