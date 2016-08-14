import React, {Component, PropTypes} from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

import {getTags} from '../../actions/tagActions';

const tastes = ['salty', 'savory', 'sour', 'bitter', 'spicy', 'sweet'];

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

    if (!values.ingredients) {
        errors.ingredients = 'Required';
    }

    return errors;

};

const form = reduxForm({
    form: 'RecipeAddForm',
    validate
});


class RecipeAddPage extends Component {
    componentWillMount() {
        this.props.getTags();
    }

    constructor(props) {
        super(props);
        this.renderIngredients = this.renderIngredients.bind(this);
        this.renderTags = this.renderTags.bind(this);

        this.state = {
            currentTag: ''
        };
    }

    renderTextField(field) {
        return (
            <TextField fullWidth={true} {...field.input} errorText={field.touched && field.error && field.error}/>
        );
    }

    renderChip(field) {
        return (
            <Chip {...field.input} style={styles.chip}>
                {field.input.value}
            </Chip>
        )
    }

    renderTags({fields}) {
        return (
            <div>
                <div style={styles.wrapper}>
                    {fields.map((member, index) =>
                        <Field component={this.renderChip} name={`${member}.label`} key={index}
                               onRequestDelete={() => fields.remove(index)}/>
                    )}
                </div>

                <AutoComplete
                    name="currentTag"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.props.tags}
                    maxSearchResults={5}
                    onUpdateInput={(searchText) => {
                        this.setState({currentTag: searchText});
                    }}
                    searchText={this.state.currentTag}
                    onNewRequest={chosenRequest => {
                        this.setState({currentTag: chosenRequest});
                        fields.push({label: chosenRequest});
                        this.setState({currentTag: ''});
                    }}
                />

                <RaisedButton style={{marginLeft: 20}} label="Add Tag" primary={true}
                              onTouchTap={() => fields.push({label: this.state.currentTag})}/>
            </div>
        );
    }

    renderIngredients({fields}) {
        return (
            <div>
                {fields.map((member, index) =>
                    <div key={index} className="row">
                        <div className="col-xs-10">
                            <Field
                                name={`${member}.ingredient`}
                                type="text"
                                component={this.renderTextField}
                                placeholder={`Ingredient ${index + 1}`} multiLine={true}/>
                        </div>

                        <div className="col-xs-2">
                            <RaisedButton style={{alignItems: 'center'}} label="Remove"
                                          primary={true}
                                          onTouchTap={() => {
                                              fields.remove(index);
                                          }}/>
                        </div>
                    </div>
                )}
                <RaisedButton label="Add Ingredient" primary={true} onTouchTap={() => fields.push({})}/>
            </div>
        );
    }

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            'image': 'http:lorempixel.com/300x300'
        };

        this.props.initialize(initData);
    }

    handleFormSubmit(formProps) {
        formProps.ingredients = formProps.ingredients.filter(ingredient => ingredient.ingredient);
        console.log(formProps);
    }

    render() {

        const {handleSubmit, pristine, reset, submitting, invalid} = this.props;

        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    <div>
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                            <Field name="title" floatingLabelText="Title" type="text" component={this.renderTextField}/>

                            <Field name="description" floatingLabelText="Description"
                                   component={this.renderTextField} multiLine={true} rows={5}/>

                            <div className="row between-xs">
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="calories" floatingLabelText="Title"
                                           component={this.renderTextField} type="number"/>
                                </div>
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="totalTime" floatingLabelText="Total Time"
                                           component={this.renderTextField} type="number"/>
                                </div>
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="rating" floatingLabelText="Rating"
                                           component={this.renderTextField} type="number"/>
                                </div>
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="servings" floatingLabelText="Servings"
                                           component={this.renderTextField} type="number"/>
                                </div>
                            </div>

                            <h2>Ingredients</h2>
                            <FieldArray name="ingredients" component={this.renderIngredients}/>

                            <h2>Tags</h2>
                            <FieldArray name="tags" component={this.renderTags}/>

                            <h2>Tastes</h2>
                            <div className="row between-xs">
                                {tastes.map((taste, index) => {
                                    return (
                                        <div key={index} className="col-xs-4">
                                            <Field name={taste}
                                                   floatingLabelText={taste}
                                                   component={this.renderTextField}/>
                                        </div>
                                    );
                                })}
                            </div>

                            <RaisedButton style={{marginTop: 25}} type="submit" label="Submit" primary={true}
                                          disabled={submitting || invalid}/>

                            <RaisedButton style={{marginLeft: 25}} label="Clear Values"
                                          disabled={pristine || submitting} onTouchTap={reset}/>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({tags}) {
    return {tags};
}

export default connect(mapStateToProps, {getTags})(form(RecipeAddPage));

