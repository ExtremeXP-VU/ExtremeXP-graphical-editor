/**
 */
package com.extremexp.emf.model.workflow.impl;

import com.extremexp.emf.model.workflow.ExclusiveJoin;
import com.extremexp.emf.model.workflow.WorkflowPackage;

import org.eclipse.emf.ecore.EClass;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Exclusive Join</b></em>'.
 * <!-- end-user-doc -->
 *
 * @generated
 */
public class ExclusiveJoinImpl extends OperatorImpl implements ExclusiveJoin {
	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected ExclusiveJoinImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WorkflowPackage.Literals.EXCLUSIVE_JOIN;
	}

} //ExclusiveJoinImpl
