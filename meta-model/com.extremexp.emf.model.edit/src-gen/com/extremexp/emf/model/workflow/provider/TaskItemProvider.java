/**
 */
package com.extremexp.emf.model.workflow.provider;

import com.extremexp.emf.model.workflow.Task;
import com.extremexp.emf.model.workflow.WorkflowFactory;
import com.extremexp.emf.model.workflow.WorkflowPackage;

import java.util.Collection;
import java.util.List;

import org.eclipse.emf.common.notify.AdapterFactory;
import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EStructuralFeature;

import org.eclipse.emf.edit.provider.ComposeableAdapterFactory;
import org.eclipse.emf.edit.provider.IItemPropertyDescriptor;
import org.eclipse.emf.edit.provider.ItemPropertyDescriptor;
import org.eclipse.emf.edit.provider.ViewerNotification;

/**
 * This is the item provider adapter for a {@link com.extremexp.emf.model.workflow.Task} object.
 * <!-- begin-user-doc -->
 * <!-- end-user-doc -->
 * @generated
 */
public class TaskItemProvider extends NodeItemProvider {
	/**
	 * This constructs an instance from a factory and a notifier.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public TaskItemProvider(AdapterFactory adapterFactory) {
		super(adapterFactory);
	}

	/**
	 * This returns the property descriptors for the adapted class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public List<IItemPropertyDescriptor> getPropertyDescriptors(Object object) {
		if (itemPropertyDescriptors == null) {
			super.getPropertyDescriptors(object);

			addNamePropertyDescriptor(object);
			addDescriptionPropertyDescriptor(object);
			addIsAbstractPropertyDescriptor(object);
			addImplementationRefPropertyDescriptor(object);
			addUiPropertyDescriptor(object);
		}
		return itemPropertyDescriptors;
	}

	/**
	 * This adds a property descriptor for the Name feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addNamePropertyDescriptor(Object object) {
		itemPropertyDescriptors
				.add(createItemPropertyDescriptor(((ComposeableAdapterFactory) adapterFactory).getRootAdapterFactory(),
						getResourceLocator(), getString("_UI_Task_name_feature"),
						getString("_UI_PropertyDescriptor_description", "_UI_Task_name_feature", "_UI_Task_type"),
						WorkflowPackage.Literals.TASK__NAME, true, false, false,
						ItemPropertyDescriptor.GENERIC_VALUE_IMAGE, null, null));
	}

	/**
	 * This adds a property descriptor for the Description feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addDescriptionPropertyDescriptor(Object object) {
		itemPropertyDescriptors
				.add(createItemPropertyDescriptor(((ComposeableAdapterFactory) adapterFactory).getRootAdapterFactory(),
						getResourceLocator(), getString("_UI_Task_description_feature"),
						getString("_UI_PropertyDescriptor_description", "_UI_Task_description_feature",
								"_UI_Task_type"),
						WorkflowPackage.Literals.TASK__DESCRIPTION, true, false, false,
						ItemPropertyDescriptor.GENERIC_VALUE_IMAGE, null, null));
	}

	/**
	 * This adds a property descriptor for the Is Abstract feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addIsAbstractPropertyDescriptor(Object object) {
		itemPropertyDescriptors
				.add(createItemPropertyDescriptor(((ComposeableAdapterFactory) adapterFactory).getRootAdapterFactory(),
						getResourceLocator(), getString("_UI_Task_isAbstract_feature"),
						getString("_UI_PropertyDescriptor_description", "_UI_Task_isAbstract_feature", "_UI_Task_type"),
						WorkflowPackage.Literals.TASK__IS_ABSTRACT, true, false, false,
						ItemPropertyDescriptor.BOOLEAN_VALUE_IMAGE, null, null));
	}

	/**
	 * This adds a property descriptor for the Implementation Ref feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addImplementationRefPropertyDescriptor(Object object) {
		itemPropertyDescriptors
				.add(createItemPropertyDescriptor(((ComposeableAdapterFactory) adapterFactory).getRootAdapterFactory(),
						getResourceLocator(), getString("_UI_Task_implementationRef_feature"),
						getString("_UI_PropertyDescriptor_description", "_UI_Task_implementationRef_feature",
								"_UI_Task_type"),
						WorkflowPackage.Literals.TASK__IMPLEMENTATION_REF, true, false, false,
						ItemPropertyDescriptor.GENERIC_VALUE_IMAGE, null, null));
	}

	/**
	 * This adds a property descriptor for the Ui feature.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected void addUiPropertyDescriptor(Object object) {
		itemPropertyDescriptors
				.add(createItemPropertyDescriptor(((ComposeableAdapterFactory) adapterFactory).getRootAdapterFactory(),
						getResourceLocator(), getString("_UI_Task_ui_feature"),
						getString("_UI_PropertyDescriptor_description", "_UI_Task_ui_feature", "_UI_Task_type"),
						WorkflowPackage.Literals.TASK__UI, true, false, true, null, null, null));
	}

	/**
	 * This specifies how to implement {@link #getChildren} and is used to deduce an appropriate feature for an
	 * {@link org.eclipse.emf.edit.command.AddCommand}, {@link org.eclipse.emf.edit.command.RemoveCommand} or
	 * {@link org.eclipse.emf.edit.command.MoveCommand} in {@link #createCommand}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Collection<? extends EStructuralFeature> getChildrenFeatures(Object object) {
		if (childrenFeatures == null) {
			super.getChildrenFeatures(object);
			childrenFeatures.add(WorkflowPackage.Literals.TASK__SUBWORKFLOW);
			childrenFeatures.add(WorkflowPackage.Literals.TASK__INPUTS);
			childrenFeatures.add(WorkflowPackage.Literals.TASK__GENERATES);
			childrenFeatures.add(WorkflowPackage.Literals.TASK__OUTPUTS);
			childrenFeatures.add(WorkflowPackage.Literals.TASK__PARAMETERS);
			childrenFeatures.add(WorkflowPackage.Literals.TASK__METADATA);
		}
		return childrenFeatures;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected EStructuralFeature getChildFeature(Object object, Object child) {
		// Check the type of the specified child object and return the proper feature to use for
		// adding (see {@link AddCommand}) it as a child.

		return super.getChildFeature(object, child);
	}

	/**
	 * This returns Task.gif.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object getImage(Object object) {
		return overlayImage(object, getResourceLocator().getImage("full/obj16/Task"));
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected boolean shouldComposeCreationImage() {
		return true;
	}

	/**
	 * This returns the label text for the adapted class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getText(Object object) {
		String label = ((Task) object).getName();
		return label == null || label.length() == 0 ? getString("_UI_Task_type")
				: getString("_UI_Task_type") + " " + label;
	}

	/**
	 * This handles model notifications by calling {@link #updateChildren} to update any cached
	 * children and by creating a viewer notification, which it passes to {@link #fireNotifyChanged}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public void notifyChanged(Notification notification) {
		updateChildren(notification);

		switch (notification.getFeatureID(Task.class)) {
		case WorkflowPackage.TASK__NAME:
		case WorkflowPackage.TASK__DESCRIPTION:
		case WorkflowPackage.TASK__IS_ABSTRACT:
		case WorkflowPackage.TASK__IMPLEMENTATION_REF:
			fireNotifyChanged(new ViewerNotification(notification, notification.getNotifier(), false, true));
			return;
		case WorkflowPackage.TASK__SUBWORKFLOW:
		case WorkflowPackage.TASK__INPUTS:
		case WorkflowPackage.TASK__GENERATES:
		case WorkflowPackage.TASK__OUTPUTS:
		case WorkflowPackage.TASK__PARAMETERS:
		case WorkflowPackage.TASK__METADATA:
			fireNotifyChanged(new ViewerNotification(notification, notification.getNotifier(), true, false));
			return;
		}
		super.notifyChanged(notification);
	}

	/**
	 * This adds {@link org.eclipse.emf.edit.command.CommandParameter}s describing the children
	 * that can be created under this object.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	protected void collectNewChildDescriptors(Collection<Object> newChildDescriptors, Object object) {
		super.collectNewChildDescriptors(newChildDescriptors, object);

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__SUBWORKFLOW,
				WorkflowFactory.eINSTANCE.createWorkflow()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__INPUTS,
				WorkflowFactory.eINSTANCE.createExternalInputData()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__INPUTS,
				WorkflowFactory.eINSTANCE.createIntermediateInputData()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__GENERATES,
				WorkflowFactory.eINSTANCE.createMetric()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__OUTPUTS,
				WorkflowFactory.eINSTANCE.createOutputData()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__PARAMETERS,
				WorkflowFactory.eINSTANCE.createParameter()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__PARAMETERS,
				WorkflowFactory.eINSTANCE.createDynamicParameter()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__PARAMETERS,
				WorkflowFactory.eINSTANCE.createStaticParameter()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.TASK__METADATA,
				WorkflowFactory.eINSTANCE.createMetaData()));
	}

}
