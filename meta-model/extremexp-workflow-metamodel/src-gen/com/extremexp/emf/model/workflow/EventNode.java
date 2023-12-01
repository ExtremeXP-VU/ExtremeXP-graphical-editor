/**
 */
package com.extremexp.emf.model.workflow;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Event Node</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.EventNode#getName <em>Name</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getEventNode()
 * @model
 * @generated
 */
public interface EventNode extends Node {
	/**
	 * Returns the value of the '<em><b>Name</b></em>' attribute.
	 * The literals are from the enumeration {@link com.extremexp.emf.model.workflow.Event}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name</em>' attribute.
	 * @see com.extremexp.emf.model.workflow.Event
	 * @see #setName(Event)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getEventNode_Name()
	 * @model
	 * @generated
	 */
	Event getName();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.EventNode#getName <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name</em>' attribute.
	 * @see com.extremexp.emf.model.workflow.Event
	 * @see #getName()
	 * @generated
	 */
	void setName(Event value);

} // EventNode
