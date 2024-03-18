import React from 'react';

function Resume() {
    return (
        <div className="resume-container">
            <header>
                <h1>Maya Hernandez</h1>
                <p>Kansas City, Kansas, United States</p>
                <p>Email: mayamarie_offic@aol.com | Phone: 4056936210</p>
                <p><a href="https://www.linkedin.com/in/maya-hernandez-6a504216a">linkedin.com/in/maya-hernandez-6a504216a</a></p>
            </header>
            
            <section>
                <h2>Summary</h2>
                <p>Hi there! I'm Maya Hernandez, a dedicated and versatile professional with a passion for both technology and hands-on craftsmanship. I recently graduated from a rigorous full-stack bootcamp while simultaneously working full-time as an electrical apprentice, where I honed my skills in both fields.</p>
            </section>
            
            {/* Other sections... */}

            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Electrical Code</li>
                    <li>Electrical Contracting</li>
                    <li>Electrical Troubleshooting</li>
                    <li>Light Electrical</li>
                    <li>NoSQL</li>
                </ul>
            </section>
        </div>
    );
}

export default Resume;
