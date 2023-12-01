/**
 */
package com.extremexp.emf.model.workflow;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Group</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.Group#getName <em>Name</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Group#getMetadata <em>Metadata</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Group#getTask <em>Task</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Group#getUi <em>Ui</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getGroup()
 * @model
 * @generated
 */
public interface Group extends EObject {
	/**
	 * Returns the value of the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name</em>' attribute.
	 * @see #setName(String)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getGroup_Name()
	 * @model
	 * @generated
	 */
	String getName();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Group#getName <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name</em>' attribute.
	 * @see #getName()
	 * @generated
	 */
	void setName(String value);

	/**
	 * Returns the value of the '<em><b>Metadata</b></em>' containment reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.MetaData}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Metadata</em>' containment reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getGroup_Metadata()
	 * @model containment="true"
	 * @generated
	 */
	EList<MetaData> getMetadata();

	/**
	 * Returns the value of the '<em><b>Task</b></em>' reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.Task}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Task</em>' reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getGroup_Task()
	 * @model
	 * @generated
	 */
	EList<Task> getTask();

	/**
	 * Returns the value of the '<em><b>Ui</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ui</em>' reference.
	 * @see #setUi(UI)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getGroup_Ui()
	 * @model
	 * @generated
	 */
	UI getUi();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Group#getUi <em>Ui</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ui</em>' reference.
	 * @see #getUi()
	 * @generated
	 */
	void setUi(UI value);

} // Group
