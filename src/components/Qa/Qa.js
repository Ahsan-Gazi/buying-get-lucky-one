import React from 'react';
import './Qa.css'

const Qa = () => {
    return (
        <div>
            <div className='QAns'>
                <h2>How React works?</h2>
                <p>First of all React is a JavaScript library That's why we can use JavaScript code here.</p>
                <p>Html code can be infused in building react app</p>
                <p>In React Users can create representation of a DOM node by declaring the Element function</p>
                <p>React use ClassName instead of traditional DOM class</p>
                <p>In React most import thing is that JSX tags which have a name, children and attribute</p>
                <p></p><br/>
                <h2>Props vs State differences</h2>
                <p>Props are read only on the other hand State is both read and write only<br/> that means props value can't be changed but State value can be changed if needed</p>
                <p>Props are immutable but state is mutable</p>
                <p>Props are used to send data one component another on the other hand State is used to send data within the component only</p>
                <p>Props' performances are high but state 's performance is less than props</p>
                <p>Staleless component can only be used only for props but not for state</p>
                <h2>How does useState Work?</h2>
            </div>
        </div>
    );
};

export default Qa;