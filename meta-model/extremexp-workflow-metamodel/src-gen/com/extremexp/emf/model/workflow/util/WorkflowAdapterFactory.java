/**
 */
package com.extremexp.emf.model.workflow.util;

import com.extremexp.emf.model.workflow.*;

import org.eclipse.emf.common.notify.Adapter;
import org.eclipse.emf.common.notify.Notifier;

import org.eclipse.emf.common.notify.impl.AdapterFactoryImpl;

import org.eclipse.emf.ecore.EObject;

/**
 * <!-- begin-user-doc -->
 * The <b>Adapter Factory</b> for the model.
 * It provides an adapter <code>createXXX</code> method for each class of the model.
 * <!-- end-user-doc -->
 * @see com.extremexp.emf.model.workflow.WorkflowPackage
 * @generated
 */
public class WorkflowAdapterFactory extends AdapterFactoryImpl {
	/**
	 * The cached model package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected static WorkflowPackage modelPackage;

	/**
	 * Creates an instance of the adapter factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public WorkflowAdapterFactory() {
		if (modelPackage == null) {
			modelPackage = WorkflowPackage.eINSTANCE;
		}
	}

	/**
	 * Returns whether this factory is applicable for the type of the object.
	 * <!-- begin-user-doc -->
	 * This implementation returns <code>true</code> if the object is either the model's package or is an instance object of the model.
	 * <!-- end-user-doc -->
	 * @return whether this factory is applicable for the type of the object.
	 * @generated
	 */
	@Override
	public boolean isFactoryForType(Object object) {
		if (object == modelPackage) {
			return true;
		}
		if (object instanceof EObject) {
			return ((EObject) object).eClass().getEPackage() == modelPackage;
		}
		return false;
	}

	/**
	 * The switch that delegates to the <code>createXXX</code> methods.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected WorkflowSwitch<Adapter> modelSwitch = new WorkflowSwitch<Adapter>() {
		@Override
		public Adapter caseWorkflow(Workflow object) {
			return createWorkflowAdapter();
		}

		@Override
		public Adapter caseNode(Node object) {
			return createNodeAdapter();
		}

		@Override
		public Adapter caseInputData(InputData object) {
			return createInputDataAdapter();
		}

		@Override
		public Adapter caseExternalInputData(ExternalInputData object) {
			return createExternalInputDataAdapter();
		}

		@Override
		public Adapter caseIntermediateInputData(IntermediateInputData object) {
			return createIntermediateInputDataAdapter();
		}

		@Override
		public Adapter caseOutputData(OutputData object) {
			return createOutputDataAdapter();
		}

		@Override
		public Adapter caseMetric(Metric object) {
			return createMetricAdapter();
		}

		@Override
		public Adapter caseParameter(Parameter object) {
			return createParameterAdapter();
		}

		@Override
		public Adapter caseDynamicParameter(DynamicParameter object) {
			return createDynamicParameterAdapter();
		}

		@Override
		public Adapter caseStaticParameter(StaticParameter object) {
			return createStaticParameterAdapter();
		}

		@Override
		public Adapter caseParameterType(ParameterType object) {
			return createParameterTypeAdapter();
		}

		@Override
		public Adapter caseArray(Array object) {
			return createArrayAdapter();
		}

		@Override
		public Adapter caseStructure(Structure object) {
			return createStructureAdapter();
		}

		@Override
		public Adapter caseField(Field object) {
			return createFieldAdapter();
		}

		@Override
		public Adapter caseTask(Task object) {
			return createTaskAdapter();
		}

		@Override
		public Adapter caseOperator(Operator object) {
			return createOperatorAdapter();
		}

		@Override
		public Adapter caseLink(Link object) {
			return createLinkAdapter();
		}

		@Override
		public Adapter caseConditionalLink(ConditionalLink object) {
			return createConditionalLinkAdapter();
		}

		@Override
		public Adapter caseRegularLink(RegularLink object) {
			return createRegularLinkAdapter();
		}

		@Override
		public Adapter caseExceptionalLink(ExceptionalLink object) {
			return createExceptionalLinkAdapter();
		}

		@Override
		public Adapter caseUI(UI object) {
			return createUIAdapter();
		}

		@Override
		public Adapter caseGroup(Group object) {
			return createGroupAdapter();
		}

		@Override
		public Adapter caseMetaData(MetaData object) {
			return createMetaDataAdapter();
		}

		@Override
		public Adapter caseParallel(Parallel object) {
			return createParallelAdapter();
		}

		@Override
		public Adapter caseExclusive(Exclusive object) {
			return createExclusiveAdapter();
		}

		@Override
		public Adapter caseInclusive(Inclusive object) {
			return createInclusiveAdapter();
		}

		@Override
		public Adapter caseComplex(Complex object) {
			return createComplexAdapter();
		}

		@Override
		public Adapter caseParallelJoin(ParallelJoin object) {
			return createParallelJoinAdapter();
		}

		@Override
		public Adapter caseExclusiveJoin(ExclusiveJoin object) {
			return createExclusiveJoinAdapter();
		}

		@Override
		public Adapter caseInclusiveJoin(InclusiveJoin object) {
			return createInclusiveJoinAdapter();
		}

		@Override
		public Adapter caseComplexJoin(ComplexJoin object) {
			return createComplexJoinAdapter();
		}

		@Override
		public Adapter caseEventNode(EventNode object) {
			return createEventNodeAdapter();
		}

		@Override
		public Adapter casePrimitiveType(PrimitiveType object) {
			return createPrimitiveTypeAdapter();
		}

		@Override
		public Adapter defaultCase(EObject object) {
			return createEObjectAdapter();
		}
	};

	/**
	 * Creates an adapter for the <code>target</code>.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param target the object to adapt.
	 * @return the adapter for the <code>target</code>.
	 * @generated
	 */
	@Override
	public Adapter createAdapter(Notifier target) {
		return modelSwitch.doSwitch((EObject) target);
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Workflow <em>Workflow</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Workflow
	 * @generated
	 */
	public Adapter createWorkflowAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Node <em>Node</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Node
	 * @generated
	 */
	public Adapter createNodeAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.InputData <em>Input Data</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.InputData
	 * @generated
	 */
	public Adapter createInputDataAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ExternalInputData <em>External Input Data</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ExternalInputData
	 * @generated
	 */
	public Adapter createExternalInputDataAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.IntermediateInputData <em>Intermediate Input Data</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.IntermediateInputData
	 * @generated
	 */
	public Adapter createIntermediateInputDataAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.OutputData <em>Output Data</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.OutputData
	 * @generated
	 */
	public Adapter createOutputDataAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Metric <em>Metric</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Metric
	 * @generated
	 */
	public Adapter createMetricAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Parameter <em>Parameter</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Parameter
	 * @generated
	 */
	public Adapter createParameterAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.DynamicParameter <em>Dynamic Parameter</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.DynamicParameter
	 * @generated
	 */
	public Adapter createDynamicParameterAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.StaticParameter <em>Static Parameter</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.StaticParameter
	 * @generated
	 */
	public Adapter createStaticParameterAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ParameterType <em>Parameter Type</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ParameterType
	 * @generated
	 */
	public Adapter createParameterTypeAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Array <em>Array</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Array
	 * @generated
	 */
	public Adapter createArrayAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Structure <em>Structure</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Structure
	 * @generated
	 */
	public Adapter createStructureAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Field <em>Field</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Field
	 * @generated
	 */
	public Adapter createFieldAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Task <em>Task</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Task
	 * @generated
	 */
	public Adapter createTaskAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Operator <em>Operator</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Operator
	 * @generated
	 */
	public Adapter createOperatorAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Link <em>Link</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Link
	 * @generated
	 */
	public Adapter createLinkAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ConditionalLink <em>Conditional Link</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ConditionalLink
	 * @generated
	 */
	public Adapter createConditionalLinkAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.RegularLink <em>Regular Link</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.RegularLink
	 * @generated
	 */
	public Adapter createRegularLinkAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ExceptionalLink <em>Exceptional Link</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ExceptionalLink
	 * @generated
	 */
	public Adapter createExceptionalLinkAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.UI <em>UI</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.UI
	 * @generated
	 */
	public Adapter createUIAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Group <em>Group</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Group
	 * @generated
	 */
	public Adapter createGroupAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.MetaData <em>Meta Data</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.MetaData
	 * @generated
	 */
	public Adapter createMetaDataAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Parallel <em>Parallel</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Parallel
	 * @generated
	 */
	public Adapter createParallelAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Exclusive <em>Exclusive</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Exclusive
	 * @generated
	 */
	public Adapter createExclusiveAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Inclusive <em>Inclusive</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Inclusive
	 * @generated
	 */
	public Adapter createInclusiveAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.Complex <em>Complex</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.Complex
	 * @generated
	 */
	public Adapter createComplexAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ParallelJoin <em>Parallel Join</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ParallelJoin
	 * @generated
	 */
	public Adapter createParallelJoinAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ExclusiveJoin <em>Exclusive Join</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ExclusiveJoin
	 * @generated
	 */
	public Adapter createExclusiveJoinAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.InclusiveJoin <em>Inclusive Join</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.InclusiveJoin
	 * @generated
	 */
	public Adapter createInclusiveJoinAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.ComplexJoin <em>Complex Join</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.ComplexJoin
	 * @generated
	 */
	public Adapter createComplexJoinAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.EventNode <em>Event Node</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.EventNode
	 * @generated
	 */
	public Adapter createEventNodeAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for an object of class '{@link com.extremexp.emf.model.workflow.PrimitiveType <em>Primitive Type</em>}'.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null so that we can easily ignore cases;
	 * it's useful to ignore a case when inheritance will catch all the cases anyway.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @see com.extremexp.emf.model.workflow.PrimitiveType
	 * @generated
	 */
	public Adapter createPrimitiveTypeAdapter() {
		return null;
	}

	/**
	 * Creates a new adapter for the default case.
	 * <!-- begin-user-doc -->
	 * This default implementation returns null.
	 * <!-- end-user-doc -->
	 * @return the new adapter.
	 * @generated
	 */
	public Adapter createEObjectAdapter() {
		return null;
	}

} //WorkflowAdapterFactory
