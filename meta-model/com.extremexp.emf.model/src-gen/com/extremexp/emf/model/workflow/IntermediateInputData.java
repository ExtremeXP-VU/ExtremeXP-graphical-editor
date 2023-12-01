/**
 */
package com.extremexp.emf.model.workflow;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Intermediate Input Data</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.IntermediateInputData#getOutputdata <em>Outputdata</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getIntermediateInputData()
 * @model
 * @generated
 */
public interface IntermediateInputData extends InputData {
	/**
	 * Returns the value of the '<em><b>Outputdata</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Outputdata</em>' reference.
	 * @see #setOutputdata(OutputData)
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getIntermediateInputData_Outputdata()
	 * @model
	 * @generated
	 */
	OutputData getOutputdata();

	/**
	 * Sets the value of the '{@link com.extremexp.emf.model.workflow.IntermediateInputData#getOutputdata <em>Outputdata</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param value the new value of the '<em>Outputdata</em>' reference.
	 * @see #getOutputdata()
	 * @generated
	 */
	void setOutputdata(OutputData value);

} // IntermediateInputData
