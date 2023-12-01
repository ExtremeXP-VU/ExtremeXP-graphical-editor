/**
 */
package com.extremexp.emf.model.workflow;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Dynamic Parameter</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.DynamicParameter#getValue <em>Value</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getDynamicParameter()
 * @model
 * @generated
 */
public interface DynamicParameter extends Parameter {
	/**
	 * Returns the value of the '<em><b>Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Value</em>' reference.
	 * @see #setValue(OutputData)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getDynamicParameter_Value()
	 * @model
	 * @generated
	 */
	OutputData getValue();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.DynamicParameter#getValue <em>Value</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Value</em>' reference.
	 * @see #getValue()
	 * @generated
	 */
	void setValue(OutputData value);

} // DynamicParameter
