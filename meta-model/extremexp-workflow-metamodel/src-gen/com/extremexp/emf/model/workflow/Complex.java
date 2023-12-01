/**
 */
package com.extremexp.emf.model.workflow;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Complex</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.Complex#isComplexCondition <em>Complex Condition</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getComplex()
 * @model
 * @generated
 */
public interface Complex extends Operator {
	/**
	 * Returns the value of the '<em><b>Complex Condition</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Complex Condition</em>' attribute.
	 * @see #setComplexCondition(boolean)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getComplex_ComplexCondition()
	 * @model
	 * @generated
	 */
	boolean isComplexCondition();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Complex#isComplexCondition <em>Complex Condition</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Complex Condition</em>' attribute.
	 * @see #isComplexCondition()
	 * @generated
	 */
	void setComplexCondition(boolean value);

} // Complex
