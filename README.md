# AdapterDesignPatternTS
###### This EX is a Typescript EX that practices Adapter-design-pattern.

*Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.*

In this Ex I implement the use of adapter design-pattern, using TypeScript.

**Ex instructions**
<br />
- [x] Using interface, Create Processor interface that hsa a name and process method - gets input as string and returns string.
- [x]     Create StringProcessor as a base class for all  string processors.
   <li>    StringProcessor implements Processor interface!
   <li>    Leave process method as abstract.
- [x]  Create UpCase (class, a kind of Processor), Which gets input as a string and returns the string in upper case
- [x]  Create DownCase (a kind of Processor), Which gets input as a string and returns the string in lower case
- [x]  Create SplitterMark (a kind of Processor), Which gets input as a string and returns the string with ! in between the words
- [x]  Create a Tester class with static method like so:
      <li>  process(p:Processor, s:string):void {
      <li> 		log("Using Processor " + p.name)
      <li> 		log(p.process(s))
      <li>    }
- [x]  Create a new class named String Swapper that has a method named swap, taking a string and returns a string.
   <li> This method swaps each 2 characters, starting from both sides of the string, in that input ('Ahalan' -> 'nalahA')
- [x]  Assume you can't change existing code, How can we use our new string swapper class with our Tester process method?
- [x] Create processors objects and test them via Tester.process
