import { useMemo } from 'react';
import matchaImg from '../assets/matcha-img-of-me.jpg';


// for lines of binary text in background
const BINARY_OPTIONS = ["01010111 01111001 01101110 01101110", "01001101 01110101 01110011 01110011 01100101 01101100 01101101 01100001 01101110", "01001000 01100101 01101100 01101100 01101111 00100001"];
const COLOR_OPTIONS = ["green", "darkgreen", "greenyellow"];
const NUM_LINES = 8;

// picks a random number 0-2 for both the binary string and color option arrays
function get_rand_number(): number{
    let rand_num = Math.floor(Math.random() * 3);
    return rand_num;
}

function Home(){
    const binaryLines = useMemo(
        () => 
            Array.from({length: NUM_LINES}, (_, i) =>({
                id: i,
                text: BINARY_OPTIONS[get_rand_number()],
                color: COLOR_OPTIONS[get_rand_number()],
                top: `${Math.floor(Math.random() * 20)}vh`,
                duration: `${Math.floor(Math.random() * 40) + 20}s`,
            })),
        [],
    )

    return (
        <>

            {/* navigation bar */}
            <nav>
                <ul>
                    <li><a href = "/">Home</a></li>
                    <li><a href = "">Internships</a></li>
                    <li><a href = "">Work Experience</a></li>
                    <li><a href = "">Campus Involvement</a></li>
                    <li><a href = "">Projects</a></li>
                    <li><a href = "">Gallery</a></li>
                </ul>
            </nav>

            {/* header */}
            <header>
                {/*binary numbers in background*/}
                <div id = "binary-wrapper">
                    {binaryLines.map((line) =>(
                        <p
                            key = {line.id}
                            className = "binary-line"
                            style={{
                                color: line.color,
                                top: line.top,
                                animationDuration: line.duration,
                                zIndex: -1,
                            }}
                        >
                            {line.text}
                        </p>
                    ))}
                </div>

                {/* intro text */}
                <h1>&lt;h1&gt; Hello World, I'm Wynn! &lt;/h1&gt;</h1>
                <p>&lt;p&gt; <i>Thanks for visiting my site :]</i> &lt;/p&gt;</p>
            </header>

            {/* main content */}
            <main>
                <h2>&lt;h2&gt; About Me &lt;/h2&gt;</h2>

                {/* <!-- two column layout for img and text --> */}
                <div className = "two-col">

                    <div className = "left-inner-col">
                        <img src = {matchaImg} alt = "Photo of Wynn Musselman"/>
                        <p className = "img-caption">↑ Picture of me with some matcha!</p>
                    </div>
                    
                    <div className = "right-inner-col">
                        
                        <p>
                            My name is Wynn Musselman! I'm from the Pittsburgh area, but I go to school
                            at Boston University. I am a junior studying Computer Science 
                            with a minor in Political Science. 
                        </p>
                        <p>
                            This semester, I am on the e-board for BU's Girls Who Code chapter and I teach
                            web development lessons for the Hack4Impact chapter. Additionally, I am a 
                            community ambassador for Spark! and a grader for a web development class. If you
                            want to learn more about my involvement on campus or what else I am up to, 
                            click through my site!
                        </p>
                        
                    </div>
                </div>
            </main>

            {/* footer */}
            <footer>
                <p>⋄ <a href = "https://www.linkedin.com/in/wynn-musselman/">linkedin.com/in/wynn-musselman/</a> ⋄ <a href = "https://github.com/WynnMusselman">github.com/WynnMusselman</a> ⋄</p>
            </footer>
        </>
    )
}

export default Home