---
layout: single
permalink: /argus-saf
title: "Argus SAF"
---

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
  <p markdown="1">**Argus-SAF** is also known as Amandroid, first published at [CCS'14](https://www.sigsac.org/ccs/CCS2014/) [[pdf](http://www.fengguow.com/resources/papers/AmandroidCCS14.pdf)].</p>
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

{% include image.html url="images/projects/amandroid-pipeline.png" description="Figure: The pipeline of Amandroid framework." %}

Amandroid take an Android APK ``x`` as the input, then it works as following:

1. Extract ``x``, then parse ``*.dex`` file to ``Jawa-DeDexer`` module and other files (like ``*.xml``, ``resource.arsc``) to ``Preprocess`` module.
2. ``Jawa Dedexer`` in ``Dex2Jawa`` module decompile the ``*.dex`` file into **Jawa** format. Parsers in ``Preprocess`` module can provide app’s information to ``AppInfoCollector``.
Developer can specify what kind of information he/she is interested and non-interesting app can be ignored.
Finally, ``Preprocess`` module will output meta data of ``x``.
3. ``AndroidEnvironmentGenerator`` in ``EnvironmentBuilder`` is getting all sources codes and meta datas from previous step, then building the environment method for each of the component.
4. ``DataFlowFramework`` provide data flow analysis technics to examine data flow problems.
``AndroidReachingFactsAnalysis`` takes environment methods as the entry points and build **IDFG**.
``InterProceduralDataDependenceAnalysis`` takes **IDFG** and build **DDG**.
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

<pre><code class="bash">$ java -jar argus-saf_***-version-assembly.jar
</code></pre>

Above command will show you the usage of Argus-SAF:

<pre><code class="bash">Available Modes:
  a[picheck]    Detecting API misuse.
  d[ecompile]   Decompile Apk file(s).
  s[tage]       Stage middle results.
  t[aint]       Perform taint analysis on Apk(s).
</code></pre>

There are several modes you can use. Let's take taint analysis as an example, type:

<pre><code class="bash">$ java -jar argus-saf_***-version-assembly.jar t
</code></pre>

It will show you the usage and available options:

<pre><code class="bash">usage: t[aint] [options] &lt;file_apk/dir&gt;
 -d,--debug            Output debug information.
 -f,--force            Force delete previous decompile result. [Default: false]
 -i,--ini &lt;path&gt;       Set .ini configuration file path.
 -mo,--module &lt;name&gt;   Taint analysis module to use. [Default: DATA_LEAKAGE, Choices: (COMMUNICATION_LEAKAGE,
                       OAUTH_TOKEN_TRACKING, PASSWORD_TRACKING, INTENT_INJECTION, DATA_LEAKAGE)]
 -o,--output &lt;dir&gt;     Set output directory. [Default: .]
</code></pre>

Two notable options are `-mo,--module` and `-i,--ini`.

1. `-mo,--module` allows you to set the module you wanna use in the analysis. By default it set to **DATA_LEAKAGE** detection,
you can switch between different modules by specify this option.
2. `-i,--ini` allows you to specify the custom configuration file to use for the analysis, the detailed information will be
discussed in [Configuration File](#configuration-file).

<h3 id="start-test">Test</h3>
To make sure Argus-SAF running on your environment, you can execute it on our test apks,
which you can download from [ICC-Bench](https://github.com/fgwei/ICC-Bench/tree/master/apks).

The command to run is:

<pre><code class="bash">$ java -jar argus-saf_***-version-assembly.jar t -o /outputPath /path/icc-bench
</code></pre>

<div class="bs-callout bs-callout-default" id="amandroid-stash">
  <h4>Install Amandroid Stash</h4>
  <p markdown="1">If you are first time use Argus-SAF, above test command will automatically download and install
  **Amandroid Stash** under path `~/.amandroid_stash`. It contains necessary android sdks and configuration files
  for Argus-SAF's analysis.</p>
</div>

More test apks you can find from [DroidBench](https://github.com/secure-software-engineering/DroidBench/tree/master/apk).

<h2 id="work">Working with Argus-SAF</h2>

Argus-SAF released two libraries: `jawa-core` and `amandroid-core`. Both of them are exist in the [Maven Central Repo](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22com.github.arguslab%22).

As aforementioned, `jawa-core` contains all the static analysis apis for analyzing [Jawa](jawa-language),
`amandroid-core` contains all the android related analyzing apis and tools.

<h3 id="work-obtain">Obtain Argus-SAF as Library</h3>

You can obtain Argus-SAF as library for your own project to build new static analysis tools.

Here, we assume your project is a **SBT** project:

Depend on `jawa-core` by editing build.sbt:

<pre><code class="scala">libraryDependencies += "com.github.arguslab" %% "jawa-core" % VERSION
</code></pre>

Depend on `amandroid-core` by editing build.sbt:

<pre><code class="scala">libraryDependencies += "com.github.arguslab" %% "amandroid-core" % VERSION
</code></pre>

<div class="bs-callout bs-callout-warning" id="source-code">
  <h4> Note that:</h4>
  <p markdown="1"> 1. Depend on `amandroid-core` will automatically add `jawa-core` as dependency.</p>
  <p markdown="1"> 2. If your project use **Maven** or **Gradle** as the build tool, you should translate it to corresponding format
  by following format in [Maven Central Repo](http://search.maven.org/#search%7Cga%7C1%7Cg%3A%22com.github.arguslab%22).</p>
  <p markdown="1"> 3. `VERSION` should change to current released version.</p>
</div>

<h3 id="playground">Build Project Based on Argus-SAF</h3>

[Argus-SAF-playground](https://github.com/arguslab/Argus-SAF-playground)
is a project which has the basic setup for a Argus-SAF enhanced project with demo codes of how to perform different kind of analysis.
Any project want to leveraging Argus-SAF can just fork from (or just learn the setup from) this repo
and based on that to implement your own project. 

<h2 id="configuration-file">Configuration File</h2>

By default, **Argus-SAF** will use `~/.amandroid_stash/amandroid/config.ini` as the default configuration file.
However, user could provide their own configuration file as well.

Format is as following:

<pre><code class="ini">; General configuration for amandroid
[general]
; Dependence directory for odex resolution.
;dependence_dir = /path
; Output debug information
debug = false
; Java Library jar files
;lib_files = /path/lib1.jar:/path/lib2.jar

; Configuration for data flow analysis
[analysis]
; Handle static initializer
static_init = false
parallel = false
; Context length for k-context sensitive analysis
k_context = 1
; Source and sink list file
;sas_file = /path/sas.txt
; timeout setting for analyzing one component (minutes)
timeout = 10

; Concurrent settings for Amandroid actors
[concurrent]
;actor_conf_file = /path/application.conf
</code></pre>

<h2 id="tutorial-load">Tutorial: Load APK</h2>

Your project could be written in both **Java** and **Scala**, in this tutorial we use **Scala** for demonstration.

<h3 id="tutorial-load-step">Step by Step</h3>

First at all, make sure your project has `amandroid-core` as dependency.

Then, following steps will decompile an apk file with loading all the classes and resources.

**`A.`** Prepare `DecompilerSettings`. It defines the decompile layout, message level, odex dependence files,
and whether force delete the output folder if it's already exist.

<pre><code class="scala">val outputUri = FileUtil.toUri(outputPath)
val layout = DecompileLayout(outputUri)
val settings = DecompilerSettings(
  AndroidGlobalConfig.settings.dependence_dir.map(FileUtil.toUri),
  dexLog = false, debugMode = false, removeSupportGen = true,
  forceDelete = true, Some(new DecompileTimer(5 minutes)), layout)
</code></pre>

**`B.`** Decompile the apk.

<pre><code class="scala">val apkUri = FileUtil.toUri(apkPath)
val (outUri, srcs, _) = ApkDecompiler.decompile(apkUri, settings)
</code></pre>

**`C.`** Initialize `ApkGlobal`, load jawa code and collect info. `ApkGlobal` is the apk resource manager, class loader and class path manager for our analysis.

<pre><code class="scala">val reporter = new PrintReporter(MsgLevel.ERROR)
val apk = new ApkGlobal(ApkModel(apkUri, outUri, srcs), reporter)
srcs foreach {
  src =>
    val fileUri = FileUtil.toUri(FileUtil.toFilePath(outUri) + File.separator + src)
    if(FileUtil.toFile(fileUri).exists()) {
      //store the app's jawa code in AmandroidCodeSource which is organized class by class.
      apk.load(fileUri, Constants.JAWA_FILE_EXT, AndroidLibraryAPISummary)
    }
}
AppInfoCollector.collectInfo(apk, global, outUri)
</code></pre>

<h3 id="tutorial-apkyard-way">Load Apk Using ApkYard</h3>

`ApkYard` is a class which allows loading multiple apks and enables inter-app analysis.
How to do inter-app analysis using `ApkYard` you can check [tutorial](#tutorial-iap).

<pre><code class="scala">val apkUri = FileUtil.toUri(apkPath)
val outputUri = FileUtil.toUri(outputPath)
val reporter = new PrintReporter(MsgLevel.ERROR)
val yard = new ApkYard(reporter)
val layout = DecompileLayout(outputUri)
val settings = DecompilerSettings(AndroidGlobalConfig.settings.dependence_dir, dexLog = false, debugMode = false, removeSupportGen = true, forceDelete = forceDelete, None, layout)
val apk = yard.loadApk(apkUri, settings)
</code></pre>

<h3 id="tutorial-load-info">Retrieve Information from Apk</h3>

<pre><code class="scala">val appName = apk.getAppName
val certificate = apk.getCertificates
val uses_permissions = apk.getUsesPermissions
val component_infos = apk.getComponentInfos // ComponentInfo(compType: [class type], typ: [ACTIVITY, SERVICE, RECEIVER, PROVIDER], exported: Boolean, enabled: Boolean, permission: ISet[String])
val intent_filter = apk.getIntentFilterDB // IntentFilterDB contains intent filter information for each component.
</code></pre>

<h3 id="tutorial-load-env">Access Environment Methods</h3>

<pre><code class="scala">var entryPoints = global.getEntryPoints(AndroidConstants.MAINCOMP_ENV) // Exposed components

if(!public_only)
  entryPoints ++= global.getEntryPoints(AndroidConstants.COMP_ENV) // Private components
</code></pre>

<h3 id="tutorial-load-full">Full Example</h3>

The full example can be found at [Argus-SAF-playground:LoadApk](https://github.com/arguslab/Argus-SAF-playground/blob/master/src/main/scala/org/argus/play/tutorial/LoadApk.scala).

<h2 id="tutorial-loadcfm">Tutorial: Load Class, Field, Method</h2>

Suppose our apk have following class:

<pre><code class="java">package org.argus.test;

public class Hello {
    int i;
    public void greeting() {
        System.out.println("Hello World!");
    }
}
</code></pre>

To load the `Hello` class and access its attributes:

**`A.`** Load APK follow previous [tutorial](#tutorial-load).

**`B.`** Do following:

<pre><code class="scala">val clazz: JawaClass = global.getClassOrResolve(new JawaType("org.argus.test.Hello"))
val method_opt: Option[JawaMethod] = clazz.getDeclaredMethodByName("greeting")
val field_opt: Option[JawaField] = clazz.getDeclaredField("i")
</code></pre>

From `JawaClass`, `JawaMethod`, `JawaField` you can access their access flags, qualified name,
overwritten information, etc. The detailed usage you can study from the source code.

<h2 id="tutorial-graph">Tutorial: Generate Graphs</h2>

In the tutorial we show how to generate [Control Flow Graph](#tutorial-graph-cfg), [Reaching Definition Analysis](#tutorial-graph-rda),
[Call Graph](#tutorial-graph-cg).

<h3 id="tutorial-graph-cfg">Control Flow Graph</h3>

`Control Flow Graph` can be easily acquired from `JawaAlirInfoProvider` with `JawaMethod`.

<pre><code class="scala">val method: JawaMethod = clazz.getDeclaredMethodByName("greeting").get
</code></pre>

<h3 id="tutorial-graph-rda">Reaching Definition Analysis</h3>

`Reaching Definition Analysis` can be easily acquired from `JawaAlirInfoProvider` with `JawaMethod` and `Control Flow Graph`.

<pre><code class="scala">val method: JawaMethod = clazz.getDeclaredMethodByName("greeting").get
val cfg = JawaAlirInfoProvider.getCfg(method)
val rda = JawaAlirInfoProvider.getRda(method, cfg)
</code></pre>


<h3 id="tutorial-graph-idfg">Inter-procedural Data Flow Graph</h3>

`Inter-procedural Data Flow Graph` (`IDFG`) is a combination of `Inter-procedural Control Flow Graph` (`ICFG`)
and a `points-to information map` which denotes that at each program point what are the possible Object types.

We have two points-to analysis algorithm to build `IDFG`: `InterProceduralSuperSpark`, `AndroidReachingFactsAnalysis`.

Most of the time `InterProceduralSuperSpark` is just used to build [Call Graph](#tutorial-graph-cg) efficiently, because
it is more light-weight than `AndroidReachingFactsAnalysis`, but still preserves enough precision (flow-,object-,field- sensitive).
We will discuss this in [Call Graph](#tutorial-graph-cg) section.

In this tutorial we will talk about how to build `IDFG` use `AndroidReachingFactsAnalysis`:

**`A.`** Configuration. `AndroidReachingFactsAnalysisConfig` contains following global variables:

1. `resolve_icc`: control whether find ICC call target and passing points-to facts to target component.
2. `resolve_static_init`: control whether handle static init when analyzing. (Recommend to turn this off as it is very time consuming.)
3. `parallel`: control whether run analysis in parallel mode. (We don't suggest to turn this on, as we have more robust [Akka Actor](http://akka.io/) solution.)

<div class="bs-callout bs-callout-primary" id="res-icc">
  <h4>Whether Resolving ICC</h4>
  <p markdown="1">We introduced `Component Based Analysis` approach to handle ICC communication in a more scalable way. Thus,
  if you are using this approach, you should turn `resolve_icc` off.</p>
</div>

To set those variables is very simple:

<pre><code class="scala">AndroidReachingFactsAnalysisConfig.resolve_icc = false
AndroidReachingFactsAnalysisConfig.resolve_static_init = false
AndroidReachingFactsAnalysisConfig.parallel = false
</code></pre>

**`B.`** Load APK follow previous [tutorial](#tutorial-load).

**`C.`** Perform analysis:

<pre><code class="scala">implicit val factory = new RFAFactFactory
// ep is the entry point method for the analsis. Most of the time it is the environment method we generated for each component.
val initialfacts = AndroidRFAConfig.getInitialFactsForMainEnvironment(ep)
val timeout = Some(new MyTimeout(AndroidGlobalConfig.settings.timeout minutes))
val idfg = AndroidReachingFactsAnalysis(global, apk, ep, initialfacts, new ClassLoadManager, timeout)
</code></pre>

<h3 id="tutorial-graph-iddg">Inter-procedural Data Dependence Graph</h3>

<pre><code class="scala">val iddResult = InterProceduralDataDependenceAnalysis(global, idfg)
</code></pre>

<h3 id="tutorial-graph-cg">Call Graph</h3>

There are few algorithms we can use to build `Call Graph`:
`InterProceduralSuperSpark`, `SignatureBasedCallGraph`, `AndroidReachingFactsAnalysisBuilder`, etc.

`InterProceduralSuperSpark` is the best option if you want to build a `Call Graph` efficiently as well as preserve enough precision.

<pre><code class="scala">// methods is the entry point methods you want to start with to build call graph.
val idfg = InterProceduralSuperSpark(global, methods.map(_.getSignature))
val icfg = idfg.icfg
val call_graph = icfg.getCallGraph
</code></pre>

<h3 id="tutorial-graph-output">Output Graphs in Different Format</h3>

Our generated graphs allows three kind of output format: **Dot**, **GraphML**, **GML**.

<pre><code class="scala">graph.toDot(writer)
graph.toGraphML(writer)
graph.toGML(writer)
</code></pre>

<h2 id="tutorial-taint">Tutorial: Taint Analysis</h2>

Argus-SAF's taint analysis leverages our `Inter-procedural Reaching Fact Analysis`
and `Inter-procedural Data Dependence Analysis` algorithms, which reported in the **Amandroid** [[pdf](http://www.fengguow.com/resources/papers/AmandroidCCS14.pdf)] paper.

<h3 id="tutorial-taint-step">Step by Step</h3>

**`A.`** Perform [Inter-procedural Data Flow Analysis](#tutorial-graph-idfg) and [Inter-procedural Data Dependence Analysis](#tutorial-graph-iddg)
to generate `IDFG` and `IDDG`.

**`B.`** Provide a `Source and Sink Manager` for the taint analysis.
Argus-SAF currently have five build-in managers:

1. `IntentInjectionSourceAndSinkManager`
2. `PasswordSourceAndSinkManager`
3. `OAuthSourceAndSinkManager`
4. `DataLeakageAndroidSourceAndSinkManager`
5. `CommunicationSourceAndSinkManager`

<pre><code class="scala">val ssm = module match {
  case INTENT_INJECTION =>
    new IntentInjectionSourceAndSinkManager(global, apk, apk.getLayoutControls, apk.getCallbackMethods, AndroidGlobalConfig.settings.sas_file)
  case PASSWORD_TRACKING =>
    new PasswordSourceAndSinkManager(global, apk, apk.getLayoutControls, apk.getCallbackMethods, AndroidGlobalConfig.settings.sas_file)
  case OAUTH_TOKEN_TRACKING =>
    new OAuthSourceAndSinkManager(global, apk, apk.getLayoutControls, apk.getCallbackMethods, AndroidGlobalConfig.settings.sas_file)
  case DATA_LEAKAGE =>
    new DataLeakageAndroidSourceAndSinkManager(global, apk, apk.getLayoutControls, apk.getCallbackMethods, AndroidGlobalConfig.settings.sas_file)
  case COMMUNICATION_LEAKAGE =>
    new CommunicationSourceAndSinkManager(global, apk, apk.getLayoutControls, apk.getCallbackMethods, AndroidGlobalConfig.settings.sas_file)
}
</code></pre>

You can also provide your own `Source and Sink Manager` follow [tutorial](#tutorial-taint-ssm).

**`C.`** Perform taint analysis:

<pre><code class="scala">val taint_analysis_result = AndroidDataDependentTaintAnalysis(global, iddResult, idfg.ptaresult, ssm)
</code></pre>

<h3 id="tutorial-taint-ssm">Customize Source and Sink Manager</h3>

`Source and Sink Manager` can specify four kind of **Source** points and two kind of **Sink** points.

**Source** points:

1. Api Source: Given api signature will return a tainted data.
2. Callback Source: Given callback method will contain tainted data as parameter.
3. UI Source: Given ui component contains tainted data.
4. ICC Source: Given component environment method is receiving tainted data.

**Sink** points:

1. Api Sink: Given api signature will leak its parameters.
2. Icc Sink: Given ICC method will leak Intent.

For both **Api Source** and **Api Sink** we can specify it in a `Source and Sink File` using following format:

<pre><code class="bash">Landroid/telephony/TelephonyManager;.getDeviceId:()Ljava/lang/String; SENSITIVE_INFO -> _SOURCE_
Landroid/content/pm/PackageManager;.queryBroadcastReceivers:(Landroid/content/Intent;I)Ljava/util/List; SENSITIVE_INFO -> _SOURCE_
Landroid/os/Handler;.obtainMessage:(ILjava/lang/Object;)Landroid/os/Message; MESSAGE -> _SOURCE_
Landroid/util/Log;.d:(Ljava/lang/String;Ljava/lang/String;)I -> _SINK_
Ljava/io/Writer;.write:(Ljava/lang/String;II)V -> _SINK_ 1
Ljava/net/URLConnection;.setRequestProperty:(Ljava/lang/String;Ljava/lang/String;)V -> _SINK_ 1|2
</code></pre>

<div class="bs-callout bs-callout-warning" id="ssm">
  <p markdown="1">Note that, `1|2` in above format means the first and second parameter will leak the data, no number means all parameter.</p>
</div>

Your `Source and Sink Manager` need extends from `SourceAndSinkManager` or `AndroidSourceAndSinkManager` or `DefaultAndroidSourceAndSinkManager`.
Here we take `IntentInjectionSourceAndSinkManager` as an example to discuss:

<pre><code class="scala">package org.argus.amandroid.plugin.dataInjection

import org.argus.amandroid.alir.pta.reachingFactsAnalysis.model.InterComponentCommunicationModel
import org.argus.amandroid.alir.taintAnalysis.AndroidSourceAndSinkManager
import org.argus.amandroid.core.Apk
import org.argus.amandroid.core.parser.LayoutControl
import org.argus.jawa.alir.controlFlowGraph.{ICFGInvokeNode, ICFGNode}
import org.argus.jawa.alir.pta.PTAResult
import org.sireum.pilar.ast._
import org.sireum.util._
import org.argus.jawa.core._

/**
 * @author <a href="mailto:fgwei521@gmail.com">Fengguo Wei</a>
 * @author <a href="mailto:sroy@k-state.edu">Sankardas Roy</a>
 */
class IntentInjectionSourceAndSinkManager(
    global: Global,
    apk: Apk,
    layoutControls: Map[Int, LayoutControl],
    callbackSigs: ISet[Signature],
    sasFilePath: String)
    extends AndroidSourceAndSinkManager(global, apk, layoutControls, callbackSigs, sasFilePath){

  // We only interested about icc source, so for api source we just return false
  override def isSource(calleeSig: Signature, callerSig: Signature, callerLoc: JumpLocation): Boolean = {
    false
  }

  // We only interested about icc source, so for callback source we just return false
  override def isCallbackSource(sig: Signature): Boolean = {
    false
  }

  // We only interested about icc source, so for ui source we just return false
  override def isUISource(calleeSig: Signature, callerSig: Signature, callerLoc: JumpLocation): Boolean = {
    false
  }

  // If the given point is environment method's entry node, we consider it as icc source.
  override def isIccSource(entNode: ICFGNode, iddgEntNode: ICFGNode): Boolean = {
    entNode == iddgEntNode
  }

  // if the given point is an ICC call, we mark it as icc sink.
  override def isIccSink(invNode: ICFGInvokeNode, ptaresult: PTAResult): Boolean = {
    var sinkflag = false
    val calleeSet = invNode.getCalleeSet
    calleeSet.foreach{
      callee =>
        if(InterComponentCommunicationModel.isIccOperation(callee.callee)){
          sinkflag = true
        }
    }
    sinkflag
  }

  // api source is using the default one, which implemented in AndroidSourceAndSinkManager.
  // The basic idea is check whether given api signature is matching with api sinks specified in provided sasFile (Source and Sink File).
}
</code></pre>

<h2 id="tutorial-iap">Tutorial: Inter-app Analysis</h2>

<pre><code class="scala">val fileUris = apkFiles.map(FileUtil.toUri)
val outputUri = FileUtil.toUri(outputPath)
val reporter = new PrintReporter(MsgLevel.ERROR)
val res = TaintAnalysisTask(TaintAnalysisModules.DATA_LEAKAGE, fileUris, outputUri, forceDelete = true, reporter).run
</code></pre>

To customize the inter-app analysis you can check the code at [Argus-SAF:TaintAnalysisTask](https://github.com/arguslab/Argus-SAF/blob/c58eb743c6e9e94afc85398a6d20a806c6a75b19/org.argus.amandroid.core/src/main/scala/org/argus/amandroid/plugin/TaintAnalysisTask.scala).

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
        <ul class="nav">
          <li><a href="#playground">Build Project Based on Argus-SAF</a></li>
        </ul>
      </li>
      <li> <a href="#configuration-file">Configuration File</a></li>
      <li> <a href="#tutorial-load">Tutorial: Load APK</a>
        <ul class="nav">
          <li><a href="#tutorial-load-step">Step by Step</a></li>
          <li><a href="#tutorial-apkyard-way">Load Apk Using ApkYard</a></li>
          <li><a href="#tutorial-load-info">Retrieve Information from Apk</a></li>
          <li><a href="#tutorial-load-env">Access Environment Methods</a></li>
          <li><a href="#tutorial-load-full">Full Example</a></li>
        </ul>
      </li>
      <li> <a href="#tutorial-loadcfm">Tutorial: Load Class, Field, Method</a></li>
      <li> <a href="#tutorial-graph">Tutorial: Generate Graphs</a>
        <ul class="nav">
          <li><a href="#tutorial-graph-cfg">Control Flow Graph</a></li>
          <li><a href="#tutorial-graph-rda">Reaching Definition Analysis</a></li>
          <li><a href="#tutorial-graph-idfg">Inter-procedural Data Flow Graph</a></li>
          <li><a href="#tutorial-graph-iddg">Inter-procedural Data Dependence Graph</a></li>
          <li><a href="#tutorial-graph-cg">Call Graph</a></li>
          <li><a href="#tutorial-graph-output">Output Graphs in Different Format</a></li>
        </ul>
      </li>
      <li> <a href="#tutorial-taint">Tutorial: Taint Analysis</a>
        <ul class="nav">
          <li><a href="#tutorial-taint-step">Step by Step</a></li>
          <li><a href="#tutorial-taint-ssm">Customize Source and Sink Manager</a></li>
        </ul>
      </li>
      <li> <a href="#tutorial-iap">Tutorial: Inter-app Analysis</a> </li>
    </ul>
    <a href="#top" class="back-to-top"> Back to top </a>
  </nav>
</div>
