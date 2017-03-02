---
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  overlay_image: unsplash-image-1.jpg
  overlay_filter: 0.4
  cta_label: "About Us &raquo;"
  cta_url: "/about"
  caption:
excerpt: 'We conduct research to apply static analysis on Dalvik bytecode of both Android applications and libraries, for the purpose of identifying potential malicious behaviors or program vulnerabilities.'
feature_row:
  - image_path: "images/projects/jawa-language.png"
    alt: "Jawa Language"
    title: "Jawa Language"
    excerpt: "Intermediate representation (IR) for JVM based bytecodes."
    url: "/jawa-language"
    btn_label: "Learn More"
  - image_path: "images/projects/argus-saf.png"
    alt: "Argus Static Analysis Framework"
    title: "Argus-SAF"
    excerpt: "Static analysis back-end for Jawa Language."
    url: "/argus-saf"
    btn_label: "Learn More"
  - image_path: "images/projects/jawa-compiler.png"
    alt: "Jawa Compiler"
    title: "Jawa Compiler"
    excerpt: "Interactive Compiler for Jawa language.<br>"
    url: "/jawa-compiler"
    btn_label: "Learn More"
  - image_path: "images/projects/gradle-plugins.png"
    alt: "Gradle Plugins"
    title: "Gradle Plugins"
    excerpt: "Gradle plugins for build Jawa with java and android program."
    url: "/gradle-plugins"
    btn_label: "Learn More"
  - image_path: "images/projects/jawa2java.png"
    alt: "Jawa to Java"
    title: "jawa2java"
    excerpt: "Translate Jawa code to Java code."
    url: "/jawa2java"
    btn_label: "Learn More"
  - image_path: "images/projects/argus-cit.png"
    alt: "Argus Code Inspection Tool"
    title: "Argus-CIT"
    excerpt: "Code Inspection Tool integrate IDE, static analysis, compiler for Jawa language."
    url: "/argus-cit"
    btn_label: "Learn More"
---

{% include feature_row %}

<div class="col-md-12" role="main" markdown="1">

<h1 class="page-header" id="products">
  Products Overview
</h1>

<p class="lead" markdown="1">
Argus Program Analysis Group provides open source softwares
that assissts researcher and analyst to do program analysis tasks.
The following diagram shows the major products from us.
</p>

{% include image.html url="images/projects/pag-org.png" description="Figure: Argus-PAG products stack." %}

------

<h2 id="JawaLanguage">Jawa Language</h2>

Jawa is an intermediate representation (IR) language 
for JVM based bytecodes (eg., Java bytecode, Dalvik bytecode). 
It is a highly flexible, annotation based, and have the capability of representing 'all' JVM based bytecode cleanly. 
Jawa defines the grammar for static analysis and IDE tools build upon it.

<h2 id="Argus-SAF">Argus-SAF</h2>

Argus Static Analysis Framework is a static analysis back-end for Jawa Language.
It provides a framework to do static analysis
on any Jawa convertible program (e.g., Java program, Android program). 
It currently integrated Jawa and Amandroid, thus have the capability to perform comprehensive, 
efficient and highly precise inter-component analysis for Android applications.

<h2 id="JawaCompiler">Jawa Compiler</h2>

Jawa compiler provides compilation support for Jawa language. 
It provides lexer and parser to parse jawa code, 
and code generator to generate java bytecode from Jawa code. 
This gives Jawa language the ability to work with Java program 
and perform Java/Jawa cross compilation.

<h2 id="GradlePlugins">Gradle Plugins</h2>

We developed two gradle plugins 
(gradle-jawa-plugin and gradle-android-jawa-plugin) 
to allowing Jawa language to build with java and android program.

<h2 id="jawa2java">jawa2java</h2>

Jawa-to-Java provides user the ability to translate Jawa code to Java code, 
which helps reverse engineering Android application much easier. 
jawa2java addressed the challenges of recovering control logic and exception handling, 
and we plan to further optimize the translation to make it even more readable.

<h2 id="Argus-CIT">Argus-CIT</h2>

Argus Code Inspection Tool is a platform which leverages
all aforementioned products to provide a user friendly reverse engineering
and program analysis working environment. 
It provides an IDE environment for reviewing and editing Jawa language,
and integrated compiler plugins, static analysis plugins
and code translation plugins to make it powerful and convenient.
Argus-CIT currently have an Eclipse implementation and Intellij implementation.
As Android development is shifting to Intellij based IDE, we stoped support
for Eclipse.