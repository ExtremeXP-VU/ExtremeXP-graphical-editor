/**
 */
package com.extremexp.emf.model.workflow;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Primitive Type</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.PrimitiveType#getType <em>Type</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getPrimitiveType()
 * @model
 * @generated
 */
public interface PrimitiveType extends ParameterType {
	/**
	 * Returns the value of the '<em><b>Type</b></em>' attribute.
	 * The literals are from the enumeration {@link com.extremexp.emf.model.workflow.Primitive}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Type</em>' attribute.
	 * @see com.extremexp.emf.model.workflow.Primitive
	 * @see #setType(Primitive)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getPrimitiveType_Type()
	 * @model
	 * @generated
	 */
	Primitive getType();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.PrimitiveType#getType <em>Type</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Type</em>' attribute.
	 * @see com.extremexp.emf.model.workflow.Primitive
	 * @see #getType()
	 * @generated
	 */
	void setType(Primitive value);

} // PrimitiveType
