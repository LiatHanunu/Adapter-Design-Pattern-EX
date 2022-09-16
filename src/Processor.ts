// Using interface, 
//Create Processor interface that hsa a name and process method - gets input as string and returns string.

interface Processor{
    name: string
    process(str:string): string
}


abstract class StringProcessor implements Processor{
    //     Create StringProcessor as a base class for all  string processors.
    //     StringProcessor implements Processor interface!
    //     Leave process method as abstract.
    get name() { return this.constructor.name }
    abstract process(str:string): string
}


class UpCase extends StringProcessor{
//      Create UpCase (class, a kind of Processor)
//      Which gets input as a string and returns the string in upper case
    process(str:string): string {
        return str.toUpperCase()
    }
}

class DownCase extends StringProcessor{
//    Create DownCase (a kind of Processor)
//    Which gets input as a string and returns the string in lower case
    process(str:string): string {
        return str.toLowerCase()
    }
}
class SplitterMark extends StringProcessor{
//    Create SplitterMark (a kind of Processor)
//    Which gets input as a string and returns the string with ! in between the words
    process(str:string): string {
        return str.replaceAll(" ", "!")
    }
}


class Tester{
//     Create a Tester class with static method like so:
//    process(p:Processor, s:string):void {
// 		log("Using Processor " + p.name)
// 		log(p.process(s))
//    }
    process(p: Processor, s: string): void {
        console.log("Using Processor " + p.name)
        console.log(p.process(s))
    }
}

class StringSwapper {
//    Create a new class named String Swapper that has a method named swap, taking a string and returns a string.
//    This method swaps each 2 characters, starting from both sides of the string, in that input ('Ahalan' -> 'nalahA')
    swap(str: string): string {
        const tempArray = str.split("")
        let j = tempArray.length - 1
        for (let i = 0; i < tempArray.length / 2; i++) {
            let tempCh = tempArray[i]
            tempArray[i] = tempArray[j]
            tempArray[j] = tempCh
            j--
        }
        return tempArray.join("")
    }
}

class Adapter implements Processor {
    // Assume you can't change existing code
	// How can we use our new string swapper class with our Tester process method?
    private adaptee: StringSwapper;
    constructor(adaptee: StringSwapper) {
        this.adaptee = adaptee;
    }
    get name() { return this.adaptee.constructor.name }
    
    public process(str: string): string {
        return this.adaptee.swap(str)
    }
}

//Create processors objects and test them via Tester.process
const uCase2 = new UpCase()
const dCase2 = new DownCase()
const sMark2 = new SplitterMark()

const test2 = new Tester()

const sSwap2 = new StringSwapper()
const adapter2 = new Adapter(sSwap2)

test2.process(uCase2, "hi") //Using Processor UpCase HI
test2.process(dCase2, "HI") //Using Processor DownCase hi
test2.process(sMark2, "how are you") //Using Processor SplitterMark how!are!you
test2.process(adapter2, "Ahalan") //Using Processor StringSwapper nalahA


// * What design pattern did we learn here? 

// ANSWER:  Adapter pattern.
// Adapter is a structural design pattern, which allows incompatible objects to collaborate.
// The Adapter acts as a wrapper between two objects.
// It catches calls for one object and transforms them to format and interface recognizable by the second object.