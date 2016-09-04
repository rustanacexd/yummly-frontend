import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RecipeList from '../home/RecipeList';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
    }
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}


const NavFilter = ({recipes}) => {

    function filterCategories(filter) {
        return recipes.filter(recipes => recipes.category.some(category => category === filter))
    }

    const seasonalRecipes = filterCategories('seasonal');
    const popularRecipes = filterCategories('popular');
    const quickRecipes = filterCategories('quick and easy');

    return (
        <Tabs>
            <Tab label="Seasonal">
                <RecipeList recipes={seasonalRecipes}/>
            </Tab>
            <Tab label="Popular">
                <RecipeList recipes={popularRecipes}/>
            </Tab>
            <Tab
                label="Quick and Easy"
                data-route="/home">
                <RecipeList recipes={quickRecipes}/>
            </Tab>
        </Tabs>
    );
};

export default NavFilter;
