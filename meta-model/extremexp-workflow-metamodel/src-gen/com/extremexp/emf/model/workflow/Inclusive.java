/**
 */
package com.extremexp.emf.model.workflow;

import org.eclipse.emf.common.util.EList;

/**
 * <!-- begin-user-doc -->
 * A representation of the model object '<em><b>Inclusive</b></em>'.
 * <!-- end-user-doc -->
 *
 * <p>
 * The following features are supported:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.Inclusive#getConditions <em>Conditions</em>}</li>
 * </ul>
 *
 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getInclusive()
 * @model
 * @generated
 */
public interface Inclusive extends Operator {
	/**
	 * Returns the value of the '<em><b>Conditions</b></em>' attribute list.
	 * The list contents are of type {@link java.lang.Boolean}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the value of the '<em>Conditions</em>' attribute list.
	 * @see com.extremexp.emf.model.workflow.WorkflowPackage#getInclusive_Conditions()
	 * @model
	 * @generated
	 */
	EList<Boolean> getConditions();

} // Inclusive
