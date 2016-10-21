---
layout: page
title: "Argus SAF"
---
{% include JB/setup %}

<div class="col-md-9" role="main" markdown="1">

<a href="https://github.com/arguslab/Argus-SAF"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>

<h1 class="page-header" id="Argus-SAF"> <a name="Argus-SAF"></a>Argus Static Analysis Framework</h1>

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


## <a name="Argus-Jawa"></a>Argus-Jawa

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

## <a name="Argus-Amandroid"></a>Argus-Amandroid

<div class="bs-callout bs-callout-primary" id="amandroid">
  <h4>Amandroid meaning</h4>
  <p markdown="1">**Aman** means secure in Indonesian, so Amandroid means secure android.</p>
</div>

### <a name="Argus-Amandroid-Overview"></a>Overview

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


### <a name="Argus-Amandroid-Workflow"></a>Amandroid Workflow

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



</div>

<div class="col-md-3" role="complementary" markdown="1">
  <nav class="bs-docs-sidebar hidden-print hidden-sm hidden-xs affix">
    <ul id="sidebar" class="nav bs-docs-sidenav">
      <li> <a href="#Argus-Jawa">Argus-Jawa</a> </li>
      <li> <a href="#Argus-Amandroid">Argus-Amandroid</a>
        <ul class="nav nav-stacked">
          <li><a href="#Argus-Amandroid-Overview">Overview</a></li>
          <li><a href="#Argus-Amandroid-Workflow">Amandroid Workflow</a></li>
        </ul>
      </li>
    </ul>
    <a href="#top" class="back-to-top"> Back to top </a>
  </nav>
</div>
