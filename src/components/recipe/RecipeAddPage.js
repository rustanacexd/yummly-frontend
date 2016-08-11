import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {Field, reduxForm, FieldArray} from 'redux-form';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';


const tastes = ['salty', 'savory', 'sour', 'bitter', 'spicy', 'sweet'];
const fields = ['image', 'title', 'description', 'calories', 'totalTime', 'rating', 'servings', 'ingredients[]'];


const form = reduxForm({
    form: 'RecipeAddForm',
});

class RecipeAddPage extends Component {

    constructor(props) {
        super(props);
        this.renderIngredients = this.renderIngredients.bind(this);
    }


    renderTextField(field) {
        return (
                <TextField fullWidth={true} {...field.input} type="number"/>
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
                                placeholder={`Ingredient ${index + 1}`}/>
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
                <RaisedButton label="Add Ingredients" primary={true} onTouchTap={() => fields.push({})}/>

            </div>
        );
    }

    componentDidMount() {
        this.handleInitialize();
    }

    handleInitialize() {
        const initData = {
            "title": 'test',
            "description": 'testdec',
            'image': 'http'

        };

        this.props.initialize(initData);
    }

    handleFormSubmit(formProps) {
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

                            <Field name="description" type="text" floatingLabelText="Description"
                                   component={this.renderTextField}/>

                            <div className="row between-xs">
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="calories" floatingLabelText="Title"
                                           component={this.renderTextField}/>
                                </div>
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="totalTime" floatingLabelText="Total Time"
                                           component={this.renderTextField}/>
                                </div>
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="rating" floatingLabelText="Rating"
                                           component={this.renderTextField}/>
                                </div>
                                <div className="col-sm-3 col-xs-12">
                                    <Field name="servings" floatingLabelText="Servings"
                                           component={this.renderTextField}/>
                                </div>
                            </div>

                            <h2>Ingredients</h2>
                            <FieldArray name="ingredients" component={this.renderIngredients}/>

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
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect()(form(RecipeAddPage));

