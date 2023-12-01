/**
 */
package com.extremexp.emf.model.workflow.util;

import com.extremexp.emf.model.workflow.*;

import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.util.Switch;

/**
 * <!-- begin-user-doc -->
 * The <b>Switch</b> for the model's inheritance hierarchy.
 * It supports the call {@link #doSwitch(EObject) doSwitch(object)}
 * to invoke the <code>caseXXX</code> method for each class of the model,
 * starting with the actual class of the object
 * and proceeding up the inheritance hierarchy
 * until a non-null result is returned,
 * which is the result of the switch.
 * <!-- end-user-doc -->
 * @see com.extremexp.emf.model.workflow.WorkflowPackage
 * @generated
 */
public class WorkflowSwitch<T> extends Switch<T> {
	/**
	 * The cached model package
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	protected static WorkflowPackage modelPackage;

	/**
	 * Creates an instance of the switch.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public WorkflowSwitch() {
		if (modelPackage == null) {
			modelPackage = WorkflowPackage.eINSTANCE;
		}
	}

	/**
	 * Checks whether this is a switch for the given package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @param ePackage the package in question.
	 * @return whether this is a switch for the given package.
	 * @generated
	 */
	@Override
	protected boolean isSwitchFor(EPackage ePackage) {
		return ePackage == modelPackage;
	}

	/**
	 * Calls <code>caseXXX</code> for each class of the model until one returns a non null result; it yields that result.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the first non-null result returned by a <code>caseXXX</code> call.
	 * @generated
	 */
	@Override
	protected T doSwitch(int classifierID, EObject theEObject) {
		switch (classifierID) {
		case WorkflowPackage.WORKFLOW: {
			Workflow workflow = (Workflow) theEObject;
			T result = caseWorkflow(workflow);
			if (result == null)
				result = caseTask(workflow);
			if (result == null)
				result = caseNode(workflow);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.NODE: {
			Node node = (Node) theEObject;
			T result = caseNode(node);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.INPUT_DATA: {
			InputData inputData = (InputData) theEObject;
			T result = caseInputData(inputData);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.EXTERNAL_INPUT_DATA: {
			ExternalInputData externalInputData = (ExternalInputData) theEObject;
			T result = caseExternalInputData(externalInputData);
			if (result == null)
				result = caseInputData(externalInputData);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.INTERMEDIATE_INPUT_DATA: {
			IntermediateInputData intermediateInputData = (IntermediateInputData) theEObject;
			T result = caseIntermediateInputData(intermediateInputData);
			if (result == null)
				result = caseInputData(intermediateInputData);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.OUTPUT_DATA: {
			OutputData outputData = (OutputData) theEObject;
			T result = caseOutputData(outputData);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.METRIC: {
			Metric metric = (Metric) theEObject;
			T result = caseMetric(metric);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.PARAMETER: {
			Parameter parameter = (Parameter) theEObject;
			T result = caseParameter(parameter);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.DYNAMIC_PARAMETER: {
			DynamicParameter dynamicParameter = (DynamicParameter) theEObject;
			T result = caseDynamicParameter(dynamicParameter);
			if (result == null)
				result = caseParameter(dynamicParameter);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.STATIC_PARAMETER: {
			StaticParameter staticParameter = (StaticParameter) theEObject;
			T result = caseStaticParameter(staticParameter);
			if (result == null)
				result = caseParameter(staticParameter);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.PARAMETER_TYPE: {
			ParameterType parameterType = (ParameterType) theEObject;
			T result = caseParameterType(parameterType);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.ARRAY: {
			Array array = (Array) theEObject;
			T result = caseArray(array);
			if (result == null)
				result = caseParameterType(array);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.STRUCTURE: {
			Structure structure = (Structure) theEObject;
			T result = caseStructure(structure);
			if (result == null)
				result = caseParameterType(structure);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.FIELD: {
			Field field = (Field) theEObject;
			T result = caseField(field);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.TASK: {
			Task task = (Task) theEObject;
			T result = caseTask(task);
			if (result == null)
				result = caseNode(task);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.OPERATOR: {
			Operator operator = (Operator) theEObject;
			T result = caseOperator(operator);
			if (result == null)
				result = caseNode(operator);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.LINK: {
			Link link = (Link) theEObject;
			T result = caseLink(link);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.CONDITIONAL_LINK: {
			ConditionalLink conditionalLink = (ConditionalLink) theEObject;
			T result = caseConditionalLink(conditionalLink);
			if (result == null)
				result = caseLink(conditionalLink);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.REGULAR_LINK: {
			RegularLink regularLink = (RegularLink) theEObject;
			T result = caseRegularLink(regularLink);
			if (result == null)
				result = caseLink(regularLink);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.EXCEPTIONAL_LINK: {
			ExceptionalLink exceptionalLink = (ExceptionalLink) theEObject;
			T result = caseExceptionalLink(exceptionalLink);
			if (result == null)
				result = caseLink(exceptionalLink);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.UI: {
			UI ui = (UI) theEObject;
			T result = caseUI(ui);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.GROUP: {
			Group group = (Group) theEObject;
			T result = caseGroup(group);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.META_DATA: {
			MetaData metaData = (MetaData) theEObject;
			T result = caseMetaData(metaData);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.PARALLEL: {
			Parallel parallel = (Parallel) theEObject;
			T result = caseParallel(parallel);
			if (result == null)
				result = caseOperator(parallel);
			if (result == null)
				result = caseNode(parallel);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.EXCLUSIVE: {
			Exclusive exclusive = (Exclusive) theEObject;
			T result = caseExclusive(exclusive);
			if (result == null)
				result = caseOperator(exclusive);
			if (result == null)
				result = caseNode(exclusive);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.INCLUSIVE: {
			Inclusive inclusive = (Inclusive) theEObject;
			T result = caseInclusive(inclusive);
			if (result == null)
				result = caseOperator(inclusive);
			if (result == null)
				result = caseNode(inclusive);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.COMPLEX: {
			Complex complex = (Complex) theEObject;
			T result = caseComplex(complex);
			if (result == null)
				result = caseOperator(complex);
			if (result == null)
				result = caseNode(complex);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.PARALLEL_JOIN: {
			ParallelJoin parallelJoin = (ParallelJoin) theEObject;
			T result = caseParallelJoin(parallelJoin);
			if (result == null)
				result = caseOperator(parallelJoin);
			if (result == null)
				result = caseNode(parallelJoin);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.EXCLUSIVE_JOIN: {
			ExclusiveJoin exclusiveJoin = (ExclusiveJoin) theEObject;
			T result = caseExclusiveJoin(exclusiveJoin);
			if (result == null)
				result = caseOperator(exclusiveJoin);
			if (result == null)
				result = caseNode(exclusiveJoin);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.INCLUSIVE_JOIN: {
			InclusiveJoin inclusiveJoin = (InclusiveJoin) theEObject;
			T result = caseInclusiveJoin(inclusiveJoin);
			if (result == null)
				result = caseOperator(inclusiveJoin);
			if (result == null)
				result = caseNode(inclusiveJoin);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.COMPLEX_JOIN: {
			ComplexJoin complexJoin = (ComplexJoin) theEObject;
			T result = caseComplexJoin(complexJoin);
			if (result == null)
				result = caseOperator(complexJoin);
			if (result == null)
				result = caseNode(complexJoin);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.EVENT_NODE: {
			EventNode eventNode = (EventNode) theEObject;
			T result = caseEventNode(eventNode);
			if (result == null)
				result = caseNode(eventNode);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		case WorkflowPackage.PRIMITIVE_TYPE: {
			PrimitiveType primitiveType = (PrimitiveType) theEObject;
			T result = casePrimitiveType(primitiveType);
			if (result == null)
				result = caseParameterType(primitiveType);
			if (result == null)
				result = defaultCase(theEObject);
			return result;
		}
		default:
			return defaultCase(theEObject);
		}
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Workflow</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Workflow</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseWorkflow(Workflow object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Node</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Node</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseNode(Node object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Input Data</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Input Data</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseInputData(InputData object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>External Input Data</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>External Input Data</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseExternalInputData(ExternalInputData object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Intermediate Input Data</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Intermediate Input Data</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseIntermediateInputData(IntermediateInputData object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Output Data</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Output Data</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseOutputData(OutputData object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Metric</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Metric</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseMetric(Metric object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Parameter</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseParameter(Parameter object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Dynamic Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Dynamic Parameter</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseDynamicParameter(DynamicParameter object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Static Parameter</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Static Parameter</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseStaticParameter(StaticParameter object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Parameter Type</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Parameter Type</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseParameterType(ParameterType object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Array</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Array</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseArray(Array object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Structure</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Structure</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseStructure(Structure object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Field</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Field</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseField(Field object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Task</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Task</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseTask(Task object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Operator</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Operator</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseOperator(Operator object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Link</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Link</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseLink(Link object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Conditional Link</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Conditional Link</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseConditionalLink(ConditionalLink object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Regular Link</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Regular Link</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseRegularLink(RegularLink object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Exceptional Link</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Exceptional Link</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseExceptionalLink(ExceptionalLink object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>UI</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>UI</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseUI(UI object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Group</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Group</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseGroup(Group object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Meta Data</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Meta Data</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseMetaData(MetaData object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Parallel</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Parallel</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseParallel(Parallel object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Exclusive</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Exclusive</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseExclusive(Exclusive object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Inclusive</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Inclusive</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseInclusive(Inclusive object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Complex</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Complex</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseComplex(Complex object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Parallel Join</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Parallel Join</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseParallelJoin(ParallelJoin object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Exclusive Join</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Exclusive Join</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseExclusiveJoin(ExclusiveJoin object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Inclusive Join</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Inclusive Join</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseInclusiveJoin(InclusiveJoin object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Complex Join</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Complex Join</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseComplexJoin(ComplexJoin object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Event Node</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Event Node</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T caseEventNode(EventNode object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>Primitive Type</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>Primitive Type</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject) doSwitch(EObject)
	 * @generated
	 */
	public T casePrimitiveType(PrimitiveType object) {
		return null;
	}

	/**
	 * Returns the result of interpreting the object as an instance of '<em>EObject</em>'.
	 * <!-- begin-user-doc -->
	 * This implementation returns null;
	 * returning a non-null result will terminate the switch, but this is the last case anyway.
	 * <!-- end-user-doc -->
	 * @param object the target of the switch.
	 * @return the result of interpreting the object as an instance of '<em>EObject</em>'.
	 * @see #doSwitch(org.eclipse.emf.ecore.EObject)
	 * @generated
	 */
	@Override
	public T defaultCase(EObject object) {
		return null;
	}

} //WorkflowSwitch
