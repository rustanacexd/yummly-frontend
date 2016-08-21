import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import {getTags, postTags} from '../../actions/tagActions';
import {postRecipe, getAllCategories} from '../../actions/recipeActions';
import Loading from '../common/Loading';

import RecipeForm from './RecipeForm';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 25
    },
};

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 50) {
        errors.title = 'Must be 50 characters or less';
    }

    if (!values.description) {
        errors.description = 'Required';
    } else if (values.description.length > 500) {
        errors.description = 'Must be 500 characters or less';
    }

    return errors;
};

const form = reduxForm({
    form: 'RecipeAddForm',
    validate
});


class RecipeAddPage extends Component {
    constructor(props) {
        super(props);
        this.renderCategories = this.renderCategories.bind(this);
        this.renderTags = this.renderTags.bind(this);

        this.state = {
            currentTag: '',
            categories: [],
            tags: []
        };
    }

    componentWillMount() {
        this.props.getTags();
        this.props.getAllCategories();

    }

    componentDidMount() {
        this.handleInitialize();
    }

    renderCategories(field) {
        return (
            <div>
                { field.input.data.map((category, index) => {
                    return (
                        <Checkbox
                            {...field.input}
                            key={index}
                            label={category}
                            name={category}
                            onCheck={(event, isInputChecked) => {
                                if (isInputChecked) {
                                    this.setState({categories: [...this.state.categories, event.target.name]});
                                } else {
                                    this.setState({
                                        categories: this.state.categories.filter(value => value !== event.target.name)
                                    });
                                }
                            }}
                        />
                    );
                })}
            </div>
        );
    }


    renderTags({fields, data}) {
        return (
            <div>
                <div style={styles.wrapper}>
                    {fields.map((member, index) =>

                        <Field component={(field) => (
                            <Chip {...field.input} style={styles.chip}>
                                {field.input.value}
                            </Chip>
                        )} name={`${member}.name`} key={index}
                               onRequestDelete={() => {
                                   fields.remove(index);
                                   this.setState({tags: this.state.tags.filter((tag, i) => i !== index)});
                               }}
                        />
                    )}
                </div>

                <AutoComplete
                    name="currentTag"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={data}
                    onUpdateInput={(searchText) => {
                        this.setState({currentTag: searchText});
                    }}
                    searchText={this.state.currentTag}
                    onNewRequest={chosenRequest => {
                        this.setState({currentTag: chosenRequest});

                        if (!this.state.tags.includes(chosenRequest)) {
                            fields.push({name: chosenRequest});
                            this.setState({tags: [...new Set([...this.state.tags, chosenRequest])]});
                        }
                    }}
                />

                <RaisedButton style={{marginLeft: 20}} label="Add Tag" primary={true}
                              onTouchTap={() => {
                                  if (!this.state.tags.includes(this.state.currentTag) && this.state.currentTag) {
                                      fields.push({name: this.state.currentTag});
                                      this.setState({tags: [...new Set([...this.state.tags, this.state.currentTag])]})
                                  }
                              }}/>
            </div>
        );
    }

    handleInitialize() {
        const initData = {
            image: 'http://lorempixel.com/640/480/food',
            ingredients: [''],
            categories: [],
            tags: [],
            taste: {
                salty: 0,
                savory: 0,
                sour: 0,
                spicy: 0,
                sweet: 0,
                bitter: 0,
            },
            calories: 0,
            totalTime: 0,
            rating: 0,
            servings: 0,
        };
        this.props.initialize(initData);
    }

    handleFormSubmit(formProps) {
        let ingredients = formProps.ingredients
            .filter(Boolean)
            .map(ingredient => ingredient.ingredient);

        let tags = [...new Set(formProps.tags)];

        formProps.categories = this.state.categories;

        this.props.postTags([...new Set([...tags, ...this.props.tags])]);
        this.props.postRecipe(
            Object.assign({}, formProps,
                {ingredients: [...new Set(ingredients)]},
                {tags: tags},
                {ingredientCount: ingredients.length}));
    }

    render() {

        const {handleSubmit, pristine, reset, submitting, invalid} = this.props;

        return (
            <div className="container">
                <Loading loading={this.props.loading}/>


                <div className="col-sm-6 col-sm-offset-3">
                    <div>
                        <RecipeForm
                            handleSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
                            pristine={pristine}
                            reset={reset}
                            submitting={submitting}
                            invalid={invalid}
                            renderCategories={this.renderCategories}
                            categories={this.props.categories}
                            renderTags={this.renderTags}
                            tags={this.props.tags.map(tag => tag.name)}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

RecipeAddPage.propTypes = {
    getTags: PropTypes.func.isRequired,
    getAllCategories: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    postRecipe: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    loading: PropTypes.bool,
    categories: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired
};

function mapStateToProps({tags, categories, ajaxCallsInProgress}) {
    return {tags, loading: ajaxCallsInProgress > 0, categories};
}

export default connect(mapStateToProps, {postTags, getTags, postRecipe, getAllCategories})(form(RecipeAddPage));

