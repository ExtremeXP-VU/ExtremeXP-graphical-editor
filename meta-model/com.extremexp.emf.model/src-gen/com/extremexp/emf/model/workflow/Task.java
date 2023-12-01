/**
 */
package com.extremexp.emf.model.workflow;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Task</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getName <em>Name</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getDescription <em>Description</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#isIsAbstract <em>Is Abstract</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getImplementationRef <em>Implementation Ref</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getSubworkflow <em>Subworkflow</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getInputs <em>Inputs</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getGenerates <em>Generates</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getOutputs <em>Outputs</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getParameters <em>Parameters</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getMetadata <em>Metadata</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.Task#getUi <em>Ui</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask()
 * @model
 * @generated
 */
public interface Task extends Node {
	/**
	 * Returns the value of the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Name</em>' attribute.
	 * @see #setName(String)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Name()
	 * @model
	 * @generated
	 */
	String getName();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Task#getName <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Name</em>' attribute.
	 * @see #getName()
	 * @generated
	 */
	void setName(String value);

	/**
	 * Returns the value of the '<em><b>Description</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Description</em>' attribute.
	 * @see #setDescription(String)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Description()
	 * @model
	 * @generated
	 */
	String getDescription();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Task#getDescription <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Description</em>' attribute.
	 * @see #getDescription()
	 * @generated
	 */
	void setDescription(String value);

	/**
	 * Returns the value of the '<em><b>Is Abstract</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Is Abstract</em>' attribute.
	 * @see #setIsAbstract(boolean)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_IsAbstract()
	 * @model
	 * @generated
	 */
	boolean isIsAbstract();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Task#isIsAbstract <em>Is Abstract</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Is Abstract</em>' attribute.
	 * @see #isIsAbstract()
	 * @generated
	 */
	void setIsAbstract(boolean value);

	/**
	 * Returns the value of the '<em><b>Implementation Ref</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Implementation Ref</em>' attribute.
	 * @see #setImplementationRef(String)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_ImplementationRef()
	 * @model
	 * @generated
	 */
	String getImplementationRef();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Task#getImplementationRef <em>Implementation Ref</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Implementation Ref</em>' attribute.
	 * @see #getImplementationRef()
	 * @generated
	 */
	void setImplementationRef(String value);

	/**
	 * Returns the value of the '<em><b>Subworkflow</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Subworkflow</em>' containment reference.
	 * @see #setSubworkflow(Workflow)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Subworkflow()
	 * @model containment="true"
	 * @generated
	 */
	Workflow getSubworkflow();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Task#getSubworkflow <em>Subworkflow</em>}' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Subworkflow</em>' containment reference.
	 * @see #getSubworkflow()
	 * @generated
	 */
	void setSubworkflow(Workflow value);

	/**
	 * Returns the value of the '<em><b>Inputs</b></em>' containment reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.InputData}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Inputs</em>' containment reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Inputs()
	 * @model containment="true"
	 * @generated
	 */
	EList<InputData> getInputs();

	/**
	 * Returns the value of the '<em><b>Generates</b></em>' containment reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.Metric}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Generates</em>' containment reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Generates()
	 * @model containment="true"
	 * @generated
	 */
	EList<Metric> getGenerates();

	/**
	 * Returns the value of the '<em><b>Outputs</b></em>' containment reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.OutputData}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Outputs</em>' containment reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Outputs()
	 * @model containment="true"
	 * @generated
	 */
	EList<OutputData> getOutputs();

	/**
	 * Returns the value of the '<em><b>Parameters</b></em>' containment reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.Parameter}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Parameters</em>' containment reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Parameters()
	 * @model containment="true"
	 * @generated
	 */
	EList<Parameter> getParameters();

	/**
	 * Returns the value of the '<em><b>Metadata</b></em>' containment reference list.
	 * The list contents are of type {@link com.extremexp.emf.model.workflow.MetaData}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Metadata</em>' containment reference list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Metadata()
	 * @model containment="true"
	 * @generated
	 */
	EList<MetaData> getMetadata();

	/**
	 * Returns the value of the '<em><b>Ui</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Ui</em>' reference.
	 * @see #setUi(UI)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getTask_Ui()
	 * @model
	 * @generated
	 */
	UI getUi();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.Task#getUi <em>Ui</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Ui</em>' reference.
	 * @see #getUi()
	 * @generated
	 */
	void setUi(UI value);

} // Task
