#### 🙋‍♀️ TIL 
- Personal notes from reading "Refactoring: Improving the Design of Existing Code" by Martin Fowler

### Chaper 1
#### Refactoring: A First Example
`pg.1`
- Examples can be easily either too complicated to work through or small enough to be comprehensible - do not look like it's worthwhile.

#### Comments on the Starting Program
`pg.4`
- On a larger scale program, a single inline function can be hard to understand.
- After all, the complier doesn't care whether the code is ugly or clean but humans do. 
  A poorly designed system is hard to change-becuase it is difficult to figure out what to change and how tehse changes will interact with the existing code to get the behavior I want.
- If the program lacks structure, it's usually easier to add structure to the program first, then make the change.

#### The First Step in Refactoring
`pg.5`
- The first step for refactoring is to ensure a solid set of tests for that section of code. An important part of the tests is the way they report their result.
  It is vital to make tests sef-checking and think them as a bug detector. 


#### Decomposing the statement Function
`pg.6-8`
- When refactoring a long function, try to identify points that separate different parts of the overall behavior.
##### Extract Function
- Turn the chunk of code into its own function, naming it after what it does.
- Look in the fragment for any variables that will no longer be in scope after being extracted. Pass the variables as parameters or initialize it inside the extracted code if necessary.
- Immediately compile and test to see if there anything broken. Small changes and testing after each change enables a tight feedback loop: it's the essence of the refactoring process.
 (* `Compile` means doing whatever is needed to make the JavaScript executable.)
- Rename the extract function or variables for clarification purposes.
 
---

### Chaper 6 A First Set of Refactorings
#### Extract Function
`pg.106-111`
- Look at a fragment of code, understand `what` it is doing, then extract it into its own function named after its `purpose`.
- When to enclose code in its own function - the seperation between intention and implementation, when you have to spend  `effort` figuring out what it is doing, then extract the code block into a function and name it after the `what`.
- Name a function after the intent of the fuction (by what it does, not by how it does it).

-`Notion Chp 6 #1-5` https://www.notion.so/Chp-6-1-5-a964036cc8604e7cae120e6ff3630a69
