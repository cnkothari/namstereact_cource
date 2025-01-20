//  createElement needs 3 argument  firstone is tag a second one Object and third one what we need to pass in tag , Here in object we can give attributes like class,id,etc 

// React.createElement is just object

// Nested Html inside React

{/* <div id="paremt">
  <div id="child">
    <h1 >I am h1 tag !</h1>
    <h2 >I am h1 tag !</h2>
  </div>
  <div id="child2">
    <h1 >I am h1 tag !</h1>
    <h2 >I am h1 tag !</h2>
  </div>
</div>
ReactElement(object) => Html (Browser understad) */
//  to pass sibling we need to pass array
}

const parent = React.createElement(
    'div',
    {id:'paremt'},
    [
        React.createElement(
            'div',
            {id:'child'},
            [
                React.createElement(
                    'h1',
                    {},
                    "I am h1 tag !"
                ),
                React.createElement(
                    'h2',
                    {},
                    "I am h2 tag !"
                )
            ]
             
        ),
        React.createElement(
            'div',
            {id:'child2'},
            [
                React.createElement(
                    'h1',
                    {},
                    "I am h1 tag !"
                ),
                React.createElement(
                    'h2',
                    {},
                    "I am h2 tag !"
                )
            ]
             
        )
    ]

);
console.log(parent);
const heading = React.createElement(
    "h1" ,
    {id: 'heading',xyz: 'abc'} ,
    "Hello World From React!" 
);

//console.log(heading); //returns Object
const root =  ReactDOM.createRoot(document.getElementById("root"));

// root.render's job is take object and put it up and convert object in h1 tag and put in dom
//root.render replace the content inside root div
root.render(parent);