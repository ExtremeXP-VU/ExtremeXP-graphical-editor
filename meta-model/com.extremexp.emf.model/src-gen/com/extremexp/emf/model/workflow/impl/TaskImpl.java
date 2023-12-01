/**
 */
package com.extremexp.emf.model.workflow.impl;

import com.extremexp.emf.model.workflow.InputData;
import com.extremexp.emf.model.workflow.MetaData;
import com.extremexp.emf.model.workflow.Metric;
import com.extremexp.emf.model.workflow.OutputData;
import com.extremexp.emf.model.workflow.Parameter;
import com.extremexp.emf.model.workflow.Task;
import com.extremexp.emf.model.workflow.UI;
import com.extremexp.emf.model.workflow.Workflow;
import com.extremexp.emf.model.workflow.WorkflowPackage;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;

import org.eclipse.emf.ecore.util.EObjectContainmentEList;
import org.eclipse.emf.ecore.util.InternalEList;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Task</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * </p>
 * <ul>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getName <em>Name</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getDescription <em>Description</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#isIsAbstract <em>Is Abstract</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getImplementationRef <em>Implementation Ref</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getSubworkflow <em>Subworkflow</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getInputs <em>Inputs</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getGenerates <em>Generates</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getOutputs <em>Outputs</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getParameters <em>Parameters</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getMetadata <em>Metadata</em>}</li>
 *   <li>{@link com.extremexp.emf.model.workflow.impl.TaskImpl#getUi <em>Ui</em>}</li>
 * </ul>
 *
 * @generated
 */
public class TaskImpl extends NodeImpl implements Task {
	/**
	 * The default value of the '{@link #getName() <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected static final String NAME_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getName() <em>Name</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getName()
	 * @generated
	 * @ordered
	 */
	protected String name = NAME_EDEFAULT;

	/**
	 * The default value of the '{@link #getDescription() <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDescription()
	 * @generated
	 * @ordered
	 */
	protected static final String DESCRIPTION_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getDescription() <em>Description</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getDescription()
	 * @generated
	 * @ordered
	 */
	protected String description = DESCRIPTION_EDEFAULT;

	/**
	 * The default value of the '{@link #isIsAbstract() <em>Is Abstract</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isIsAbstract()
	 * @generated
	 * @ordered
	 */
	protected static final boolean IS_ABSTRACT_EDEFAULT = false;

	/**
	 * The cached value of the '{@link #isIsAbstract() <em>Is Abstract</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #isIsAbstract()
	 * @generated
	 * @ordered
	 */
	protected boolean isAbstract = IS_ABSTRACT_EDEFAULT;

	/**
	 * The default value of the '{@link #getImplementationRef() <em>Implementation Ref</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getImplementationRef()
	 * @generated
	 * @ordered
	 */
	protected static final String IMPLEMENTATION_REF_EDEFAULT = null;

	/**
	 * The cached value of the '{@link #getImplementationRef() <em>Implementation Ref</em>}' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getImplementationRef()
	 * @generated
	 * @ordered
	 */
	protected String implementationRef = IMPLEMENTATION_REF_EDEFAULT;

	/**
	 * The cached value of the '{@link #getSubworkflow() <em>Subworkflow</em>}' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getSubworkflow()
	 * @generated
	 * @ordered
	 */
	protected Workflow subworkflow;

	/**
	 * The cached value of the '{@link #getInputs() <em>Inputs</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getInputs()
	 * @generated
	 * @ordered
	 */
	protected EList<InputData> inputs;

	/**
	 * The cached value of the '{@link #getGenerates() <em>Generates</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getGenerates()
	 * @generated
	 * @ordered
	 */
	protected EList<Metric> generates;

	/**
	 * The cached value of the '{@link #getOutputs() <em>Outputs</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getOutputs()
	 * @generated
	 * @ordered
	 */
	protected EList<OutputData> outputs;

	/**
	 * The cached value of the '{@link #getParameters() <em>Parameters</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getParameters()
	 * @generated
	 * @ordered
	 */
	protected EList<Parameter> parameters;

	/**
	 * The cached value of the '{@link #getMetadata() <em>Metadata</em>}' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getMetadata()
	 * @generated
	 * @ordered
	 */
	protected EList<MetaData> metadata;

	/**
	 * The cached value of the '{@link #getUi() <em>Ui</em>}' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see #getUi()
	 * @generated
	 * @ordered
	 */
	protected UI ui;

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected TaskImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EClass eStaticClass() {
		return WorkflowPackage.Literals.TASK;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getName() {
		return name;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setName(String newName) {
		String oldName = name;
		name = newName;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.TASK__NAME, oldName, name));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setDescription(String newDescription) {
		String oldDescription = description;
		description = newDescription;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.TASK__DESCRIPTION, oldDescription,
					description));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public boolean isIsAbstract() {
		return isAbstract;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setIsAbstract(boolean newIsAbstract) {
		boolean oldIsAbstract = isAbstract;
		isAbstract = newIsAbstract;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.TASK__IS_ABSTRACT, oldIsAbstract,
					isAbstract));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String getImplementationRef() {
		return implementationRef;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setImplementationRef(String newImplementationRef) {
		String oldImplementationRef = implementationRef;
		implementationRef = newImplementationRef;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.TASK__IMPLEMENTATION_REF,
					oldImplementationRef, implementationRef));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Workflow getSubworkflow() {
		return subworkflow;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public NotificationChain basicSetSubworkflow(Workflow newSubworkflow, NotificationChain msgs) {
		Workflow oldSubworkflow = subworkflow;
		subworkflow = newSubworkflow;
		if (eNotificationRequired()) {
			ENotificationImpl notification = new ENotificationImpl(this, Notification.SET,
					WorkflowPackage.TASK__SUBWORKFLOW, oldSubworkflow, newSubworkflow);
			if (msgs == null)
				msgs = notification;
			else
				msgs.add(notification);
		}
		return msgs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setSubworkflow(Workflow newSubworkflow) {
		if (newSubworkflow != subworkflow) {
			NotificationChain msgs = null;
			if (subworkflow != null)
				msgs = ((InternalEObject) subworkflow).eInverseRemove(this,
						EOPPOSITE_FEATURE_BASE - WorkflowPackage.TASK__SUBWORKFLOW, null, msgs);
			if (newSubworkflow != null)
				msgs = ((InternalEObject) newSubworkflow).eInverseAdd(this,
						EOPPOSITE_FEATURE_BASE - WorkflowPackage.TASK__SUBWORKFLOW, null, msgs);
			msgs = basicSetSubworkflow(newSubworkflow, msgs);
			if (msgs != null)
				msgs.dispatch();
		} else if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.TASK__SUBWORKFLOW, newSubworkflow,
					newSubworkflow));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<InputData> getInputs() {
		if (inputs == null) {
			inputs = new EObjectContainmentEList<InputData>(InputData.class, this, WorkflowPackage.TASK__INPUTS);
		}
		return inputs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Metric> getGenerates() {
		if (generates == null) {
			generates = new EObjectContainmentEList<Metric>(Metric.class, this, WorkflowPackage.TASK__GENERATES);
		}
		return generates;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<OutputData> getOutputs() {
		if (outputs == null) {
			outputs = new EObjectContainmentEList<OutputData>(OutputData.class, this, WorkflowPackage.TASK__OUTPUTS);
		}
		return outputs;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<Parameter> getParameters() {
		if (parameters == null) {
			parameters = new EObjectContainmentEList<Parameter>(Parameter.class, this,
					WorkflowPackage.TASK__PARAMETERS);
		}
		return parameters;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EList<MetaData> getMetadata() {
		if (metadata == null) {
			metadata = new EObjectContainmentEList<MetaData>(MetaData.class, this, WorkflowPackage.TASK__METADATA);
		}
		return metadata;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public UI getUi() {
		if (ui != null && ui.eIsProxy()) {
			InternalEObject oldUi = (InternalEObject) ui;
			ui = (UI) eResolveProxy(oldUi);
			if (ui != oldUi) {
				if (eNotificationRequired())
					eNotify(new ENotificationImpl(this, Notification.RESOLVE, WorkflowPackage.TASK__UI, oldUi, ui));
			}
		}
		return ui;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public UI basicGetUi() {
		return ui;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public void setUi(UI newUi) {
		UI oldUi = ui;
		ui = newUi;
		if (eNotificationRequired())
			eNotify(new ENotificationImpl(this, Notification.SET, WorkflowPackage.TASK__UI, oldUi, ui));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs) {
		switch (featureID) {
		case WorkflowPackage.TASK__SUBWORKFLOW:
			return basicSetSubworkflow(null, msgs);
		case WorkflowPackage.TASK__INPUTS:
			return ((InternalEList<?>) getInputs()).basicRemove(otherEnd, msgs);
		case WorkflowPackage.TASK__GENERATES:
			return ((InternalEList<?>) getGenerates()).basicRemove(otherEnd, msgs);
		case WorkflowPackage.TASK__OUTPUTS:
			return ((InternalEList<?>) getOutputs()).basicRemove(otherEnd, msgs);
		case WorkflowPackage.TASK__PARAMETERS:
			return ((InternalEList<?>) getParameters()).basicRemove(otherEnd, msgs);
		case WorkflowPackage.TASK__METADATA:
			return ((InternalEList<?>) getMetadata()).basicRemove(otherEnd, msgs);
		}
		return super.eInverseRemove(otherEnd, featureID, msgs);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object eGet(int featureID, boolean resolve, boolean coreType) {
		switch (featureID) {
		case WorkflowPackage.TASK__NAME:
			return getName();
		case WorkflowPackage.TASK__DESCRIPTION:
			return getDescription();
		case WorkflowPackage.TASK__IS_ABSTRACT:
			return isIsAbstract();
		case WorkflowPackage.TASK__IMPLEMENTATION_REF:
			return getImplementationRef();
		case WorkflowPackage.TASK__SUBWORKFLOW:
			return getSubworkflow();
		case WorkflowPackage.TASK__INPUTS:
			return getInputs();
		case WorkflowPackage.TASK__GENERATES:
			return getGenerates();
		case WorkflowPackage.TASK__OUTPUTS:
			return getOutputs();
		case WorkflowPackage.TASK__PARAMETERS:
			return getParameters();
		case WorkflowPackage.TASK__METADATA:
			return getMetadata();
		case WorkflowPackage.TASK__UI:
			if (resolve)
				return getUi();
			return basicGetUi();
		}
		return super.eGet(featureID, resolve, coreType);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@SuppressWarnings("unchecked")
	@Override
	public void eSet(int featureID, Object newValue) {
		switch (featureID) {
		case WorkflowPackage.TASK__NAME:
			setName((String) newValue);
			return;
		case WorkflowPackage.TASK__DESCRIPTION:
			setDescription((String) newValue);
			return;
		case WorkflowPackage.TASK__IS_ABSTRACT:
			setIsAbstract((Boolean) newValue);
			return;
		case WorkflowPackage.TASK__IMPLEMENTATION_REF:
			setImplementationRef((String) newValue);
			return;
		case WorkflowPackage.TASK__SUBWORKFLOW:
			setSubworkflow((Workflow) newValue);
			return;
		case WorkflowPackage.TASK__INPUTS:
			getInputs().clear();
			getInputs().addAll((Collection<? extends InputData>) newValue);
			return;
		case WorkflowPackage.TASK__GENERATES:
			getGenerates().clear();
			getGenerates().addAll((Collection<? extends Metric>) newValue);
			return;
		case WorkflowPackage.TASK__OUTPUTS:
			getOutputs().clear();
			getOutputs().addAll((Collection<? extends OutputData>) newValue);
			return;
		case WorkflowPackage.TASK__PARAMETERS:
			getParameters().clear();
			getParameters().addAll((Collection<? extends Parameter>) newValue);
			return;
		case WorkflowPackage.TASK__METADATA:
			getMetadata().clear();
			getMetadata().addAll((Collection<? extends MetaData>) newValue);
			return;
		case WorkflowPackage.TASK__UI:
			setUi((UI) newValue);
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
		case WorkflowPackage.TASK__NAME:
			setName(NAME_EDEFAULT);
			return;
		case WorkflowPackage.TASK__DESCRIPTION:
			setDescription(DESCRIPTION_EDEFAULT);
			return;
		case WorkflowPackage.TASK__IS_ABSTRACT:
			setIsAbstract(IS_ABSTRACT_EDEFAULT);
			return;
		case WorkflowPackage.TASK__IMPLEMENTATION_REF:
			setImplementationRef(IMPLEMENTATION_REF_EDEFAULT);
			return;
		case WorkflowPackage.TASK__SUBWORKFLOW:
			setSubworkflow((Workflow) null);
			return;
		case WorkflowPackage.TASK__INPUTS:
			getInputs().clear();
			return;
		case WorkflowPackage.TASK__GENERATES:
			getGenerates().clear();
			return;
		case WorkflowPackage.TASK__OUTPUTS:
			getOutputs().clear();
			return;
		case WorkflowPackage.TASK__PARAMETERS:
			getParameters().clear();
			return;
		case WorkflowPackage.TASK__METADATA:
			getMetadata().clear();
			return;
		case WorkflowPackage.TASK__UI:
			setUi((UI) null);
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
		case WorkflowPackage.TASK__NAME:
			return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
		case WorkflowPackage.TASK__DESCRIPTION:
			return DESCRIPTION_EDEFAULT == null ? description != null : !DESCRIPTION_EDEFAULT.equals(description);
		case WorkflowPackage.TASK__IS_ABSTRACT:
			return isAbstract != IS_ABSTRACT_EDEFAULT;
		case WorkflowPackage.TASK__IMPLEMENTATION_REF:
			return IMPLEMENTATION_REF_EDEFAULT == null ? implementationRef != null
					: !IMPLEMENTATION_REF_EDEFAULT.equals(implementationRef);
		case WorkflowPackage.TASK__SUBWORKFLOW:
			return subworkflow != null;
		case WorkflowPackage.TASK__INPUTS:
			return inputs != null && !inputs.isEmpty();
		case WorkflowPackage.TASK__GENERATES:
			return generates != null && !generates.isEmpty();
		case WorkflowPackage.TASK__OUTPUTS:
			return outputs != null && !outputs.isEmpty();
		case WorkflowPackage.TASK__PARAMETERS:
			return parameters != null && !parameters.isEmpty();
		case WorkflowPackage.TASK__METADATA:
			return metadata != null && !metadata.isEmpty();
		case WorkflowPackage.TASK__UI:
			return ui != null;
		}
		return super.eIsSet(featureID);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String toString() {
		if (eIsProxy())
			return super.toString();

		StringBuilder result = new StringBuilder(super.toString());
		result.append(" (name: ");
		result.append(name);
		result.append(", description: ");
		result.append(description);
		result.append(", isAbstract: ");
		result.append(isAbstract);
		result.append(", implementationRef: ");
		result.append(implementationRef);
		result.append(')');
		return result.toString();
	}

} //TaskImpl
