import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'
import RecipeList from '../home/RecipeList';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const NavFilter = ({recipes}) => {
    return (
        <Tabs>
            <Tab label="Item One" >
                <RecipeList recipes={recipes}/>
            </Tab>
            <Tab label="Item Two"
                >
                <div>
                    <h2 style={styles.headline}>Tab Two</h2>
                    <p>
                        This is another example tab.
                    </p>
                </div>
            </Tab>
            <Tab
                label="onActive"
                data-route="/home"
                >
                <div>
                    <h2 style={styles.headline}>Tab Three</h2>
                    <p>
                        This is a third example tab.
                    </p>
                </div>
            </Tab>
        </Tabs>
    );
};

export default NavFilter;