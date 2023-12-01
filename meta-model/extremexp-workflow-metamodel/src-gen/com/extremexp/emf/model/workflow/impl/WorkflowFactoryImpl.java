/**
 */
package com.extremexp.emf.model.workflow.impl;

import com.extremexp.emf.model.workflow.*;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EDataType;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class WorkflowFactoryImpl extends EFactoryImpl implements WorkflowFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static WorkflowFactory init() {
		try {
			WorkflowFactory theWorkflowFactory = (WorkflowFactory) EPackage.Registry.INSTANCE
					.getEFactory(WorkflowPackage.eNS_URI);
			if (theWorkflowFactory != null) {
				return theWorkflowFactory;
			}
		} catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new WorkflowFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public WorkflowFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EObject create(EClass eClass) {
		switch (eClass.getClassifierID()) {
		case WorkflowPackage.WORKFLOW:
			return createWorkflow();
		case WorkflowPackage.EXTERNAL_INPUT_DATA:
			return createExternalInputData();
		case WorkflowPackage.INTERMEDIATE_INPUT_DATA:
			return createIntermediateInputData();
		case WorkflowPackage.OUTPUT_DATA:
			return createOutputData();
		case WorkflowPackage.METRIC:
			return createMetric();
		case WorkflowPackage.PARAMETER:
			return createParameter();
		case WorkflowPackage.DYNAMIC_PARAMETER:
			return createDynamicParameter();
		case WorkflowPackage.STATIC_PARAMETER:
			return createStaticParameter();
		case WorkflowPackage.ARRAY:
			return createArray();
		case WorkflowPackage.STRUCTURE:
			return createStructure();
		case WorkflowPackage.FIELD:
			return createField();
		case WorkflowPackage.TASK:
			return createTask();
		case WorkflowPackage.CONDITIONAL_LINK:
			return createConditionalLink();
		case WorkflowPackage.REGULAR_LINK:
			return createRegularLink();
		case WorkflowPackage.EXCEPTIONAL_LINK:
			return createExceptionalLink();
		case WorkflowPackage.UI:
			return createUI();
		case WorkflowPackage.GROUP:
			return createGroup();
		case WorkflowPackage.META_DATA:
			return createMetaData();
		case WorkflowPackage.PARALLEL:
			return createParallel();
		case WorkflowPackage.EXCLUSIVE:
			return createExclusive();
		case WorkflowPackage.INCLUSIVE:
			return createInclusive();
		case WorkflowPackage.COMPLEX:
			return createComplex();
		case WorkflowPackage.PARALLEL_JOIN:
			return createParallelJoin();
		case WorkflowPackage.EXCLUSIVE_JOIN:
			return createExclusiveJoin();
		case WorkflowPackage.INCLUSIVE_JOIN:
			return createInclusiveJoin();
		case WorkflowPackage.COMPLEX_JOIN:
			return createComplexJoin();
		case WorkflowPackage.EVENT_NODE:
			return createEventNode();
		case WorkflowPackage.PRIMITIVE_TYPE:
			return createPrimitiveType();
		default:
			throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object createFromString(EDataType eDataType, String initialValue) {
		switch (eDataType.getClassifierID()) {
		case WorkflowPackage.EVENT:
			return createEventFromString(eDataType, initialValue);
		case WorkflowPackage.PRIMITIVE:
			return createPrimitiveFromString(eDataType, initialValue);
		case WorkflowPackage.NEW_DATA_TYPE3:
			return createNewDataType3FromString(eDataType, initialValue);
		default:
			throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String convertToString(EDataType eDataType, Object instanceValue) {
		switch (eDataType.getClassifierID()) {
		case WorkflowPackage.EVENT:
			return convertEventToString(eDataType, instanceValue);
		case WorkflowPackage.PRIMITIVE:
			return convertPrimitiveToString(eDataType, instanceValue);
		case WorkflowPackage.NEW_DATA_TYPE3:
			return convertNewDataType3ToString(eDataType, instanceValue);
		default:
			throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Workflow createWorkflow() {
		WorkflowImpl workflow = new WorkflowImpl();
		return workflow;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ExternalInputData createExternalInputData() {
		ExternalInputDataImpl externalInputData = new ExternalInputDataImpl();
		return externalInputData;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public IntermediateInputData createIntermediateInputData() {
		IntermediateInputDataImpl intermediateInputData = new IntermediateInputDataImpl();
		return intermediateInputData;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public OutputData createOutputData() {
		OutputDataImpl outputData = new OutputDataImpl();
		return outputData;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Metric createMetric() {
		MetricImpl metric = new MetricImpl();
		return metric;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Parameter createParameter() {
		ParameterImpl parameter = new ParameterImpl();
		return parameter;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public DynamicParameter createDynamicParameter() {
		DynamicParameterImpl dynamicParameter = new DynamicParameterImpl();
		return dynamicParameter;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public StaticParameter createStaticParameter() {
		StaticParameterImpl staticParameter = new StaticParameterImpl();
		return staticParameter;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Array createArray() {
		ArrayImpl array = new ArrayImpl();
		return array;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Structure createStructure() {
		StructureImpl structure = new StructureImpl();
		return structure;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Field createField() {
		FieldImpl field = new FieldImpl();
		return field;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Task createTask() {
		TaskImpl task = new TaskImpl();
		return task;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ConditionalLink createConditionalLink() {
		ConditionalLinkImpl conditionalLink = new ConditionalLinkImpl();
		return conditionalLink;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public RegularLink createRegularLink() {
		RegularLinkImpl regularLink = new RegularLinkImpl();
		return regularLink;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ExceptionalLink createExceptionalLink() {
		ExceptionalLinkImpl exceptionalLink = new ExceptionalLinkImpl();
		return exceptionalLink;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public UI createUI() {
		UIImpl ui = new UIImpl();
		return ui;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Group createGroup() {
		GroupImpl group = new GroupImpl();
		return group;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public MetaData createMetaData() {
		MetaDataImpl metaData = new MetaDataImpl();
		return metaData;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Parallel createParallel() {
		ParallelImpl parallel = new ParallelImpl();
		return parallel;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Exclusive createExclusive() {
		ExclusiveImpl exclusive = new ExclusiveImpl();
		return exclusive;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Inclusive createInclusive() {
		InclusiveImpl inclusive = new InclusiveImpl();
		return inclusive;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Complex createComplex() {
		ComplexImpl complex = new ComplexImpl();
		return complex;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ParallelJoin createParallelJoin() {
		ParallelJoinImpl parallelJoin = new ParallelJoinImpl();
		return parallelJoin;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ExclusiveJoin createExclusiveJoin() {
		ExclusiveJoinImpl exclusiveJoin = new ExclusiveJoinImpl();
		return exclusiveJoin;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public InclusiveJoin createInclusiveJoin() {
		InclusiveJoinImpl inclusiveJoin = new InclusiveJoinImpl();
		return inclusiveJoin;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public ComplexJoin createComplexJoin() {
		ComplexJoinImpl complexJoin = new ComplexJoinImpl();
		return complexJoin;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public EventNode createEventNode() {
		EventNodeImpl eventNode = new EventNodeImpl();
		return eventNode;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public PrimitiveType createPrimitiveType() {
		PrimitiveTypeImpl primitiveType = new PrimitiveTypeImpl();
		return primitiveType;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Event createEventFromString(EDataType eDataType, String initialValue) {
		Event result = Event.get(initialValue);
		if (result == null)
			throw new IllegalArgumentException(
					"The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertEventToString(EDataType eDataType, Object instanceValue) {
		return instanceValue == null ? null : instanceValue.toString();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Primitive createPrimitiveFromString(EDataType eDataType, String initialValue) {
		Primitive result = Primitive.get(initialValue);
		if (result == null)
			throw new IllegalArgumentException(
					"The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertPrimitiveToString(EDataType eDataType, Object instanceValue) {
		return instanceValue == null ? null : instanceValue.toString();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Object createNewDataType3FromString(EDataType eDataType, String initialValue) {
		return super.createFromString(eDataType, initialValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertNewDataType3ToString(EDataType eDataType, Object instanceValue) {
		return super.convertToString(eDataType, instanceValue);
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public WorkflowPackage getWorkflowPackage() {
		return (WorkflowPackage) getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static WorkflowPackage getPackage() {
		return WorkflowPackage.eINSTANCE;
	}

} //WorkflowFactoryImpl
