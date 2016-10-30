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
  - image_path: "images/projects/argus-saf.png"
    alt: "Argus Static Analysis Framework"
    title: "Argus-SAF"
    excerpt: "Argus-SAF is a static analysis framework for Android applications and libraries. It integrated Jawa and Amandroid, and have the capability to perform comprehensive, efficient and highly precise Inter-component Data Flow Analysis."
    url: "/argus-saf"
    btn_label: "Learn More"
  - image_path: "images/projects/jawa-language.png"
    alt: "Jawa Language"
    title: "Jawa Language"
    excerpt: "Jawa is an intemediate representation (IR) language for Java-like bytecode (eg., Java bytecode, Dalvik bytecode). It is a subset of Pilar language. Jawa defines the grammar for static analysis and IDE tools build upon it."
    url: "/jawa-language"
    btn_label: "Learn More"
  - image_path: "images/projects/jawa-compiler.png"
    alt: "Jawa Compiler"
    title: "Jawa Compiler"
    excerpt: "Jawa compiler provides compilation support for Jawa language. It provides lexer and parser to parse jawa code, and code generator to generate java bytecode from jawa code. This gives Jawa language the ability to work with java program and perform cross compilation."
    url: "/jawa-language"
    btn_label: "Learn More"
  - image_path: "images/projects/jawa2java.png"
    alt: "Jawa to Java"
    title: "jawa2java"
    excerpt: "Jawa-to-Java provides user the ability to translate Jawa code to Java code, which helps reverse engineering Android application much easier. jawa2java addressed the challenges of recovering control logics and exception handling, and we plan to further optimize the tranlation to make it even more readable."
    url: "/jawa-language"
    btn_label: "Learn More"
  - image_path: "images/projects/gradle-plugins.png"
    alt: "Gradle Plugins"
    title: "Gradle Plugins"
    excerpt: "We developed two gradle plugins (gradle-jawa-plugin and gradle-android-jawa-plugin) for allowing Jawa language to build with java and android program."
    url: "/gradle-plugins"
    btn_label: "Learn More"
  - image_path: "images/projects/argus-cit.png"
    alt: "Argus Code Inspection Tool"
    title: "Argus-CIT"
    excerpt: "Argus Code Inspection Tool is an Intellij plugin, which provides an IDE environment for editing Jawa language. It also helps user to do reverse engineering and perform analysis of Android application."
    url: "/argus-cit"
    btn_label: "Learn More"
---

{% include feature_row %}
