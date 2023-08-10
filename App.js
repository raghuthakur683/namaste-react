let heading = React.createElement('h1',{
    id:"heading"
},'Hello World!');


/**
 * Nasted Div or Nested Element e.g
 * 
 * <div id="parent">
 *  
 *      <div id="child1">
 *          <h1>I am in H1 Tag</h1>
 *          <h2>I am in H2 Tag</h2>
 *       </div>
 *       <div id="child2">
 *          <h1>I am in H1 Tag</h1>
 *          <h2>I am in H2 Tag</h2>
 *       </div>
 * 
 * </div>
 * 
 * 
 */

let nastedElement = React.createElement('div',{"id":"parent"},
                    [React.createElement('div',{id:"child1"},
                    [React.createElement('h1',{},'I am in H1 Tag'),React.createElement('h2',{},'I am in H2 Tag')]),
                    React.createElement('div',{id:"child2"},
                    [React.createElement('h1',{},'I am in H1 Tag'),React.createElement('h2',{},'I am in H2 Tag')])]
            );



let root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(nastedElement);
