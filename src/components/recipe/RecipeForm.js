import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {Field, FieldArray} from 'redux-form';

const tastes = ['salty', 'savory', 'sour', 'bitter', 'spicy', 'sweet'];

const renderTextField = (field) => {
    return (
        <TextField fullWidth={true} {...field.input}
                   errorText={field.touched && field.error && field.error}/>
    );
};

const renderIngredients = ({fields}) => {
    return (
        <div>
            {fields.map((member, index) =>
                <div key={index} className="row">
                    <div className="col-xs-10">
                        <Field
                            name={`${member}.ingredient`}
                            type="text"
                            component={renderTextField}
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
};


const RecipeForm = ({
    handleSubmit, pristine, reset, submitting,
    invalid, renderCategories, categories, renderTags, tags
}) => (
    <form onSubmit={event => event.preventDefault()}>

        <Field name="title" floatingLabelText="Title" type="text"
               component={renderTextField}/>

        <Field name="description" floatingLabelText="Description"
               component={renderTextField} multiLine={true} rows={5}/>

        <div className="row between-xs">
            <div className="col-sm-3 col-xs-12">
                <Field name="calories" floatingLabelText="Calories (kcal)"
                       component={renderTextField} type="number"/>
            </div>
            <div className="col-sm-3 col-xs-12">
                <Field name="totalTime" floatingLabelText="Total Time (mins)"
                       component={renderTextField} type="number"
                />
            </div>
            <div className="col-sm-3 col-xs-12">
                <Field name="rating" floatingLabelText="Rating (0-5)"
                       component={renderTextField}
                       type="number" min="0" max="5"/>
            </div>
            <div className="col-sm-3 col-xs-12">
                <Field name="servings" floatingLabelText="Servings"
                       component={renderTextField} type="number"/>
            </div>
        </div>

        <h2>Category</h2>
        <Field name="categories" component={renderCategories} data={categories}/>


        <h2>Ingredients</h2>
        <FieldArray name="ingredients" component={renderIngredients}/>

        <h2>Tags</h2>
        <FieldArray name="tags" data={tags} component={renderTags}/>

        <h2>Tastes</h2>
        <div className="row between-xs">
            {tastes.map((taste, index) => {
                return (
                    <div key={index} className="col-xs-4">
                        <Field name={`taste.${taste}`}
                               type="number"
                               min="0"
                               max="10"
                               floatingLabelText={`${taste} (0-10)`}
                               component={renderTextField}/>
                    </div>
                );
            })}
        </div>


        <RaisedButton style={{marginTop: 25}} type="submit" label="Submit" primary={true}
                      disabled={submitting || invalid} onTouchTap={handleSubmit}/>

        <RaisedButton style={{marginLeft: 25}} label="Clear Values"
                      disabled={pristine || submitting} onTouchTap={reset}/>

    </form>
);

RecipeForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting:PropTypes.bool.isRequired,
    pristine:  PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired,
    renderCategories: PropTypes.func.isRequired,
    renderTags: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
};

export default RecipeForm;
