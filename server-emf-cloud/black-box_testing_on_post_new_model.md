# Black-Box Testing: Evaluating Response Behavior of POST New Model and Model Validation on EMF.cloud Server

## Expected Requiments

This section lists the expected behavior provided by the EMF.cloud Server POST new model API.

- **R01-POST-SUCCESS-RESPONSE**:
  A successful model post indicates that the model has been created and stored on the server. If a model is successfully posted to the server, the server shall return a response containing the information about the successful post. This enables the user to be notified of the successful post.

- **R02-POST-FAILURE-RESPONSE**:
  A failed model post indicates that the model was unable to be created and stored on the server. If a model post fails, the server shall respond to notify the user about the failure.

- **R03-POST-MODEL-CONSISTENCY**:
  If the model is successfully created and stored on the server via the new model POST endpoint, the stored model should be consistent with the model posted by the client. This consistency entails ensuring that there are no missing or additional instances between the posted and ultimately created model.

- **R04-POST-MODEL-VALIDATION**:
  The server shall reject the model creation request under the following circumstances:

  - **R04A-REJECT-SCHEMA-VIOLATION**:
    If the instance model (i.e., the concrete model that conforms to the meta-model) violates the schema defined in the meta-model, the server shall reject the model creation request. Schema violations include:

    <ol>
      <li> Element Violation: The model contains an element (e.g., Classifier, including classes, data types, enumerations, and type parameters) that is not defined in the meta-model.</li>
      <li> Relationship Violation: The model contains relationships between elements that are not consistent with the relationships defined in the meta-model.</li>
    </ol>

  - **R04B-REJECT-CONSTRAINTS-VIOLATION**:
    If the instance model violates the constraints defined by the meta-model, the server shall reject the model creation request. Constraints consist of additional rules such as cardinality, uniqueness, and data type.
