/**
 */
package com.extremexp.emf.model.workflow.impl;

import com.extremexp.emf.model.workflow.IntermediateInputData;
import com.extremexp.emf.model.workflow.OutputData;
import com.extremexp.emf.model.workflow.WorkflowPackage;

import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Intermediate Input Data</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.IntermediateInputDataImpl#getOutputdata <em>Outputdata</em>}</li>
 * </ul>
 *
 * @generated
 */
public class IntermediateInputDataImpl extends InputDataImpl implements IntermediateInputData {
	/**
	 * The cached value of the '{@link #getOutputdata() <em>Outputdata</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getOutputdata()
	 * @generated
	 * @ordered
	 */
	protected OutputData outputdata;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected IntermediateInputDataImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WorkflowPackage.Literals.INTERMEDIATE_INPUT_DATA;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public OutputData getOutputdata() {
		if (outputdata != null && outputdata.eIsProxy()) {
			InternalEObject oldOutputdata = (InternalEObject) outputdata;
			outputdata = (OutputData) eResolveProxy(oldOutputdata);
			if (outputdata != oldOutputdata) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE,
							WorkflowPackage.INTERMEDIATE_INPUT_DATA__OUTPUTDATA, oldOutputdata, outputdata));
			}
		}
		return outputdata;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public OutputData basicGetOutputdata() {
		return outputdata;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setOutputdata(OutputData newOutputdata) {
		OutputData oldOutputdata = outputdata;
		outputdata = newOutputdata;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.INTERMEDIATE_INPUT_DATA__OUTPUTDATA,
					oldOutputdata, outputdata));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case WorkflowPackage.INTERMEDIATE_INPUT_DATA__OUTPUTDATA:
			if (resolve)
				return getOutputdata();
			return basicGetOutputdata();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
		case WorkflowPackage.INTERMEDIATE_INPUT_DATA__OUTPUTDATA:
			setOutputdata((OutputData) newValue);
			return;
		}
		super.eSet(featureID, newValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void eUnset(int featureID) {
		switch (featureID) {
		case WorkflowPackage.INTERMEDIATE_INPUT_DATA__OUTPUTDATA:
			setOutputdata((OutputData) null);
			return;
		}
		super.eUnset(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public boolean eIsSet(int featureID) {
		switch (featureID) {
		case WorkflowPackage.INTERMEDIATE_INPUT_DATA__OUTPUTDATA:
			return outputdata != null;
		}
		return super.eIsSet(featureID);
	}

} //IntermediateInputDataImpl
