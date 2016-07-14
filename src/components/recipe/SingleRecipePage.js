import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SingleRecipePage extends Component {
    render() {

        const recipe = this.props.recipes.find(recipe => {
            return recipe.id == this.props.params.id;
        })

        if (!recipe) {
            return (
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {recipe.title}
            </div>
        );
    }
}

SingleRecipePage.PropTypes = {

};

function mapStateToProps({recipes}) {
    return { recipe: recipes };
}

export default connect(null, {})(SingleRecipePage);