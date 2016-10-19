---
layout: page
title: "Argus Static Analysis Products"
---
{% include JB/setup %}

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
    <div class="container" align="center">
        <h1>Argus Program Analysis Group.</h1>
        <p>Argus-PAG conduct research to apply static analysis on Dalvik bytecode of both Android applications and libraries, 
           for the purpose of identifying potential malicious behaviors or program vulnerabilities.</p>
        <p><a class="btn btn-primary btn-lg" href="about" role="button">About us &raquo;</a></p>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-4">
            <h2>Argus-SAF</h2>
            <p>Argus-SAF is a static analysis framework for Android applications and libraries. 
               It integrated Jawa and Amandroid, who have the capability to perform comprehensive, efficient and highly precise Inter-component Data Flow Analysis.</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
            <h2>Jawa Language</h2>
            <p>Jawa is an intemediate representation (IR) language for Java-like bytecode (eg., Java bytecode, Dalvik bytecode).
               It is a subset of <a href="https://github.com/sireum/parser/blob/master/sireum-parser/src/main/resources/org/sireum/pilar/parser/Antlr4Pilar.g4">Pilar language</a>.
               Jawa defines the standard for static analysis and IDE tools build upon it.</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
            <h2>Jawa Compiler</h2>
            <p>Jawa compiler provides compilation support for Jawa language. 
               It provides lexer and parser to parse jawa code, and code generator to generate java bytecode from jawa code.
               This gives Jawa language the ability to work with java program and perform cross compilation.</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
            <h2>jawa2java</h2>
            <p>Jawa-to-Java provides user the ability to translate Jawa code to Java code,
               which makes the user reverse engineering apk code much easier.</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
            <h2>Gradle Plugins</h2>
            <p>We developed two gradle plugins (gradle-jawa-plugin and gradle-android-jawa-plugin) for allowing Jawa language to build with java and android program.</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
            <h2>Argus-CIT</h2>
            <p>Argus Code Inspection Tool is an intellij plugin, which provides an IDE environment for editing Jawa language.
               It also helps user to do reverse engineering and perform analysis of Android application.</p>
            <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
        </div>
    </div>
</div>