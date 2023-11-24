/**
 */
package com.extremexp.emf.model.workflow.provider;

import com.extremexp.emf.model.workflow.Workflow;
import com.extremexp.emf.model.workflow.WorkflowFactory;
import com.extremexp.emf.model.workflow.WorkflowPackage;

import java.util.Collection;
import java.util.List;

import org.eclipse.emf.common.notify.AdapterFactory;
import org.eclipse.emf.common.notify.Notification;

import org.eclipse.emf.ecore.EStructuralFeature;

import org.eclipse.emf.edit.provider.IItemPropertyDescriptor;
import org.eclipse.emf.edit.provider.ViewerNotification;

/**
 * This is the item provider adapter for a {@link com.extremexp.emf.model.workflow.Workflow} object.
 * <!-- begin-user-doc -->
 * <!-- end-user-doc -->
 * @generated
 */
public class WorkflowItemProvider extends TaskItemProvider {
	/**
	 * This constructs an instance from a factory and a notifier.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public WorkflowItemProvider(AdapterFactory adapterFactory) {
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

		}
		return itemPropertyDescriptors;
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
			childrenFeatures.add(WorkflowPackage.Literals.WORKFLOW__NODE);
			childrenFeatures.add(WorkflowPackage.Literals.WORKFLOW__LINK);
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
	 * This returns Workflow.gif.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object getImage(Object object) {
		return overlayImage(object, getResourceLocator().getImage("full/obj16/Workflow"));
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
		String label = ((Workflow) object).getName();
		return label == null || label.length() == 0 ? getString("_UI_Workflow_type")
				: getString("_UI_Workflow_type") + " " + label;
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

		switch (notification.getFeatureID(Workflow.class)) {
		case WorkflowPackage.WORKFLOW__NODE:
		case WorkflowPackage.WORKFLOW__LINK:
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

		newChildDescriptors.add(
				createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE, WorkflowFactory.eINSTANCE.createTask()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createWorkflow()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createParallel()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createExclusive()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createInclusive()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createComplex()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createParallelJoin()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createExclusiveJoin()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createInclusiveJoin()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createComplexJoin()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__NODE,
				WorkflowFactory.eINSTANCE.createEventNode()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__LINK,
				WorkflowFactory.eINSTANCE.createConditionalLink()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__LINK,
				WorkflowFactory.eINSTANCE.createRegularLink()));

		newChildDescriptors.add(createChildParameter(WorkflowPackage.Literals.WORKFLOW__LINK,
				WorkflowFactory.eINSTANCE.createExceptionalLink()));
	}

	/**
	 * This returns the label text for {@link org.eclipse.emf.edit.command.CreateChildCommand}.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String getCreateChildText(Object owner, Object feature, Object child, Collection<?> selection) {
		Object childFeature = feature;
		Object childObject = child;

		boolean qualify = childFeature == WorkflowPackage.Literals.TASK__SUBWORKFLOW
				|| childFeature == WorkflowPackage.Literals.WORKFLOW__NODE;

		if (qualify) {
			return getString("_UI_CreateChild_text2",
					new Object[] { getTypeText(childObject), getFeatureText(childFeature), getTypeText(owner) });
		}
		return super.getCreateChildText(owner, feature, child, selection);
	}

}
