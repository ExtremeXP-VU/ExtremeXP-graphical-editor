/**
 */
package com.extremexp.emf.model.workflow;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>External Input Data</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.ExternalInputData#isEligibilityCondition <em>Eligibility Condition</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getExternalInputData()
 * @model
 * @generated
 */
public interface ExternalInputData extends InputData {
	/**
	 * Returns the value of the '<em><b>Eligibility Condition</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Eligibility Condition</em>' attribute.
	 * @see #setEligibilityCondition(boolean)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getExternalInputData_EligibilityCondition()
	 * @model
	 * @generated
	 */
	boolean isEligibilityCondition();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.ExternalInputData#isEligibilityCondition <em>Eligibility Condition</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Eligibility Condition</em>' attribute.
	 * @see #isEligibilityCondition()
	 * @generated
	 */
	void setEligibilityCondition(boolean value);

} // ExternalInputData
