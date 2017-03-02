---
layout: single
permalink: /jawa-language
title: "Jawa Language"
---

<div class="col-md-9" role="main" markdown="1">

<h1 class="page-header" id="jawa-language">
  Jawa Language
</h1>

<p class="lead" markdown="1">

Jawa is an intemediate representation (IR) language for Java-like bytecode (eg., Java bytecode, Dalvik bytecode).
It is a subset of [Pilar language](https://github.com/sireum/parser/blob/master/sireum-parser/src/main/resources/org/sireum/pilar/parser/Antlr4Pilar.g4). Jawa defines the grammar for static analysis and IDE tools build upon it.

</p>

<div class="bs-callout bs-callout-warning" id="argus-saf">
  <h4>Pilar</h4>
  <p markdown="1">Pilar is a highly flexible, typed, annotation based intermediate representation language designed by [Robby](http://robby.santoslab.org/).</p>
</div>


<h2 id="grammar">Grammar</h2>

<pre><code class="grammar-kit">CompilationUnit ::= ClassOrInterfaceDeclaration*

ClassOrInterfaceDeclaration ::=
  'record' TypeDefSymbol KindAnnotation AccessFlagAnnotation ExtendsAndImplementsClause?
  InstanceFieldDeclarationBlock
  StaticFieldDeclaration*
  MethodDeclaration*

Annotation ::= TypeAnnotation
             | SignatureAnnotation
             | KindAnnotation
             | AccessFlagAnnotation
             | AnnotationKey ID?
TypeAnnotation ::= ('@owner'|'@type'|'@classDescriptor') TypeExpression
SignatureAnnotation ::= '@signature' SignatureSymbol
KindAnnotation ::= '@kind' ID
AccessFlagAnnotation ::= '@AccessFlag' ID?
AnnotationKey ::= '@' ID

ExtendsAndImplementsClause ::= 'extends' ExtendAndImplement (',' ExtendAndImplement)*
ExtendAndImplement ::= TypeSymbol KindAnnotation

InstanceFieldDeclarationBlock ::= '{' InstanceFieldDeclaration* '}'
InstanceFieldDeclaration ::= FieldDeclaration ';'

StaticFieldDeclaration ::= 'global' FieldDeclaration ';'

FieldDeclaration ::= JwType (FieldDefSymbol|StaticFieldDefSymbol) AccessFlagAnnotation

JwType ::= TypeSymbol TypeFragment*
TypeFragment ::= '[' ']'
TypeFragmentWithInit ::= '[' VarSymbol (',' VarSymbol)* ']'

MethodDeclaration ::=
  'procedure' JwType MethodDefSymbol ParamClause TypeAnnotation SignatureAnnotation AccessFlagAnnotation
  JwBody

ParamClause ::= '(' (Param (',' Param)*)? ')'
Param ::= JwType VarDefSymbol KindAnnotation?

JwBody ::= '{' LocalVarDeclaration* Location* CatchClause* '}'

LocalVarDeclaration ::= JwType VarDefSymbol ';'

Location ::= LocationDefSymbol Statement? ';'?

Statement ::= CallStatement
            | ThrowStatement
            | IfStatement
            | SwitchStatement
            | ReturnStatement
            | GotoStatement
            | MonitorStatement
            | AssignmentStatement
            | Annotation*

CallStatement ::= 'call' CallLhs? MethodNameSymbol ArgClause SignatureAnnotation TypeAnnotation KindAnnotation
CallLhs ::= VarSymbol ':='
ArgClause ::= '(' (VarSymbol (',' VarSymbol)*)? ')'

ThrowStatement ::= 'throw' VarSymbol

IfStatement ::= 'if' CondBinaryExpression 'then' 'goto' LocationSymbol

SwitchStatement ::= 'switch' VarSymbol SwitchCase* SwitchDefaultCase?
SwitchCase ::= '|' NUMBER_LITERAL '=>' 'goto' LocationSymbol
SwitchDefaultCase ::= '|' 'else' '=>' 'goto' LocationSymbol

ReturnStatement ::= 'return' VarSymbol? KindAnnotation?

GotoStatement ::= 'goto' LocationSymbol

MonitorStatement ::= '@' ('monitorenter'|'monitorexit') VarSymbol

AssignmentStatement ::= Expression_Lhs ':=' Expression_Rhs KindAnnotation? TypeAnnotation?

Expression_Lhs ::= AccessExpression
                 | IndexingExpression
                 | NameExpression

Expression_Rhs ::= NewExpression
                 | CmpExpression
                 | ExceptionExpression
                 | ConstClassExpression
                 | LengthExpression
                 | InstanceofExpression
                 | NullExpression
                 | TupleExpression
                 | CastExpression
                 | LiteralExpression
                 | UnaryExpression
                 | AccessExpression
                 | IndexingExpression
                 | BinaryExpression
                 | NameExpression

NameExpression ::= VarSymbol | StaticFieldNameSymbol

NewExpression ::= 'new' TypeSymbol TypeFragmentWithInit*

CMP ::= 'fcmpl' | 'fcmpg' | 'dcmpl' | 'dcmpg' | 'lcmp'

CmpExpression ::= CMP '(' VarSymbol ',' VarSymbol ')'

ExceptionExpression ::= 'Exception'

ConstClassExpression ::= 'constclass' TypeAnnotation

TypeExpression ::= '^' JwType

LengthExpression ::= 'length' '@' ID VarSymbol

InstanceofExpression ::= 'instanceof' '@' ID VarSymbol TypeAnnotation

NullExpression ::= 'null' TypeAnnotation

TupleExpression ::= '(' (NUMBER_LITERAL (',' NUMBER_LITERAL)*)? ')'

CastExpression ::= '(' JwType ')' VarSymbol

LiteralExpression ::= (NUMBER_LITERAL|STRING_LITERAL|'null')

private unary_op ::= '-' | '~'

UnaryExpression ::= unary_op VarSymbol

AccessExpression ::= VarSymbol '.' FieldNameSymbol

IndexingExpression ::= VarSymbol '[' (VarSymbol|NUMBER_LITERAL) ']'

private binary_op ::= '+' | '-' | '*' | '/' | '%%' | '^&' | '^|' | '^~' | '^<' | '^>' | '^>>'

BinaryExpression ::= VarSymbol binary_op (VarSymbol|NUMBER_LITERAL)

private cond_binary_op ::= '!=' | '==' | '>' | '<' | '>=' | '<='

CondBinaryExpression ::= VarSymbol cond_binary_op (VarSymbol|NUMBER_LITERAL|'null')

CatchClause ::= 'catch' JwType CatchRange 'goto' LocationSymbol ';'
CatchRange ::= '@' '[' LocationSymbol '..' LocationSymbol ']'

TypeDefSymbol ::= APOSTROPHE_ID {methods=[getJawaType]}
TypeSymbol ::= APOSTROPHE_ID {methods=[getJawaType]}

VarDefSymbol ::= ID
VarSymbol ::= ID

FieldDefSymbol ::= APOSTROPHE_ID
FieldNameSymbol ::= APOSTROPHE_ID
StaticFieldDefSymbol ::= STATIC_ID
StaticFieldNameSymbol ::= STATIC_ID

MethodDefSymbol ::= APOSTROPHE_ID
MethodNameSymbol ::= APOSTROPHE_ID
SignatureSymbol ::= APOSTROPHE_ID

LocationDefSymbol ::= LOCATION_ID
LocationSymbol ::= ID

NUMBER_LITERAL ::= number ['i'|'I'|'l'|'L'|'f'|'F'|'d'|'D']
</code></pre>

<h2 id="example">Code Example</h2>

<pre><code class="jawa">/* Block comment */
/**
 * This is a doc comment.
 * @author fgwei
 */
record `com.fgwei.Test`  @kind class @AccessFlag PUBLIC {
  `int` `com.fgwei.Test.i1` @AccessFlag PRIVATE;
}
global `java.lang.String` `@@com.fgwei.Test.str1` @AccessFlag STATIC;
procedure `int` `com.fgwei.Test.main` (`int` v3, `int` v4)
       @owner ^`com.fgwei.Test`
       @signature `Lcom/fgwei/Test;.main:()I`
       @AccessFlag PUBLIC_STATIC {
  `int` v0;
  `int`[] v1;
  `com.fgwei.Test` test;

  #L027040. test:= new `com.fgwei.Test`; // This is a line comment
  #L027041. call `com.fgwei.Test.&lt;init&gt;`(test)
         @signature `Lcom/fgwei/Test;.&lt;init&gt;:()V`
         @classDescriptor ^`com.fgwei.Test`
         @kind direct;
  #L027044. v0:= 1I;
  #L027046. v0:= test.`com.fgwei.Test.i1` @kind int @type ^`int`;
  #L027048. `@@com.fgwei.Test.str1`:= "String" ;
  #L02705a. return v0;

}
</code></pre>

<h2 id="support">Language Support</h2>

<div class="col-lg-12 bs-callout bs-callout-primary">
  <h4>Static Analyzer</h4>
  <p><a href="../argus-saf">Argus-SAF</a> is a static analysis framework build upon Jawa.</p>
</div>

<div class="col-lg-12 bs-callout bs-callout-default">
  <h4>Compiler</h4>
  <p><a href="../jawa-compiler">Jawa Compiler</a> compiles jawa code into java bytecode.</p>
</div>

<div class="col-lg-12 bs-callout bs-callout-warning">
  <h4>IDE</h4>
  <p><a href="../argus-cit">Argus-CIT</a> is an Intellij plugin, which provides an IDE environment for editing Jawa.</p>
</div>

<div class="col-lg-12 bs-callout bs-callout-primary">
  <h4>Build with Java</h4>
  <p><a href="../gradle-plugins#jawa-plugin">Gradle Jawa Plugin</a> is a gradlew plugin similar to the groovy and scala gradlew plugin which adds jawa language build support.</p>
</div>

<div class="col-lg-12 bs-callout bs-callout-default">
  <h4>Build with Android</h4>
  <p><a href="../gradle-plugins#android-jawa-plugin">Gradle Android Jawa Plugin</a> is a gradlew plugin which adds jawa language support to official gradle android plugin.</p>
</div>

<div class="col-lg-12 bs-callout bs-callout-warning">
  <h4>Translator</h4>
  <p><a href="../jawa2java">Jawa2Java</a> is a translator which translate Jawa into Java.</p>
</div>

</div>

<div class="col-md-3" role="complementary" markdown="1">
  <nav class="bs-docs-sidebar hidden-print hidden-sm hidden-xs">
    <ul class="nav bs-docs-sidenav">
      <li> <a href="#jawa-language">Jawa Language</a> </li>
      <li> <a href="#grammar">Grammar</a> </li>
      <li> <a href="#example">Code Example</a> </li>
      <li> <a href="#support">Language Support</a> </li>
    </ul>
    <a href="#top" class="back-to-top"> Back to top </a>
  </nav>
</div>
