import React, { Component } from 'react'
import SkillCard from '../components/SkillCard';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':[
                'Algo and DS',
                'Python',
                'Django',
                'Node.js',
                'Passport',
                'Git (Github)',
            ]
        };
    }

    render() {
        return (
            <div className="skills">
                {/* <h1 className="subtopic">My Skills</h1> */}
                <div className="skillCards">
                    {this.state.myskills.map((value)=>{
                        return <SkillCard value={value}/>
                    })}
                </div>

            </div>
        )
    }
    }
    
    export default Skills
    