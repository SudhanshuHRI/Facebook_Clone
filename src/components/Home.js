import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Home = () => {

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(value)
    return (
        <div>
            <div>
                <div>
                    <nav className='d-flex justify-content-between'>
                        {/* logo and search box */}
                        <div>
                            {/* <img src="#"/> */}
                            <div>
                                <span>icon</span>
                                <input type="text" />
                            </div>

                        </div>

                        {/* tabs section */}
                        <div>
                            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                <Tab label="Active" />
                                <Tab label="Disabled" />
                                <Tab label="Active" />
                                <Tab label="Active" />
                                <Tab label="Active" />
                            </Tabs>

                        </div>

                        {/* navbar icons */}

                        <div>
                            <span>icon1</span>
                            <span>icon2</span>
                            <span>icon3</span>
                            <span>icon4</span>
                        </div>
                    </nav>
                </div>
            </div>
            <div>
                <h1>This is home page.</h1>
            </div>
        </div>
    );
}

export default Home;