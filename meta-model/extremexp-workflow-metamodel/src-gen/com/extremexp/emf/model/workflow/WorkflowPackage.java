/**
 */
package com.extremexp.emf.model.workflow;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EDataType;
import org.eclipse.emf.ecore.EEnum;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EReference;

/**
 * <!-- begin-user-doc -->
 * The <b>Package</b> for the model.
 * It contains accessors for the meta objects to represent
 * <ul>
 *   <li>each class,</li>
 *   <li>each feature of each class,</li>
 *   <li>each operation of each class,</li>
 *   <li>each enum,</li>
 *   <li>and each data type</li>
 * </ul>
 * <!-- end-user-doc -->
 * @see com.extremexp.emf.model.workflow.WorkflowFactory
 * @model kind="package"
 * @generated
 */
public interface WorkflowPackage extends EPackage {
	/**
	 * The package name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNAME = "workflow";

	/**
	 * The package namespace URI.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_URI = "http://www.example.org/workflow";

	/**
	 * The package namespace name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_PREFIX = "workflow";

	/**
	 * The singleton instance of the package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	WorkflowPackage eINSTANCE = com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl.init();

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.NodeImpl <em>Node</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.NodeImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getNode()
	 * @generated
	 */
	int NODE = 1;

	/**
	 * The number of structural features of the '<em>Node</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int NODE_FEATURE_COUNT = 0;

	/**
	 * The number of operations of the '<em>Node</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int NODE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.TaskImpl <em>Task</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.TaskImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getTask()
	 * @generated
	 */
	int TASK = 14;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__NAME = NODE_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Description</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__DESCRIPTION = NODE_FEATURE_COUNT + 1;

	/**
	 * The feature id for the '<em><b>Is Abstract</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__IS_ABSTRACT = NODE_FEATURE_COUNT + 2;

	/**
	 * The feature id for the '<em><b>Implementation Ref</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__IMPLEMENTATION_REF = NODE_FEATURE_COUNT + 3;

	/**
	 * The feature id for the '<em><b>Subworkflow</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__SUBWORKFLOW = NODE_FEATURE_COUNT + 4;

	/**
	 * The feature id for the '<em><b>Inputs</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__INPUTS = NODE_FEATURE_COUNT + 5;

	/**
	 * The feature id for the '<em><b>Generates</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__GENERATES = NODE_FEATURE_COUNT + 6;

	/**
	 * The feature id for the '<em><b>Outputs</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__OUTPUTS = NODE_FEATURE_COUNT + 7;

	/**
	 * The feature id for the '<em><b>Parameters</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__PARAMETERS = NODE_FEATURE_COUNT + 8;

	/**
	 * The feature id for the '<em><b>Metadata</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__METADATA = NODE_FEATURE_COUNT + 9;

	/**
	 * The feature id for the '<em><b>Ui</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK__UI = NODE_FEATURE_COUNT + 10;

	/**
	 * The number of structural features of the '<em>Task</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK_FEATURE_COUNT = NODE_FEATURE_COUNT + 11;

	/**
	 * The number of operations of the '<em>Task</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TASK_OPERATION_COUNT = NODE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.WorkflowImpl <em>Workflow</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getWorkflow()
	 * @generated
	 */
	int WORKFLOW = 0;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__NAME = TASK__NAME;

	/**
	 * The feature id for the '<em><b>Description</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__DESCRIPTION = TASK__DESCRIPTION;

	/**
	 * The feature id for the '<em><b>Is Abstract</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__IS_ABSTRACT = TASK__IS_ABSTRACT;

	/**
	 * The feature id for the '<em><b>Implementation Ref</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__IMPLEMENTATION_REF = TASK__IMPLEMENTATION_REF;

	/**
	 * The feature id for the '<em><b>Subworkflow</b></em>' containment reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__SUBWORKFLOW = TASK__SUBWORKFLOW;

	/**
	 * The feature id for the '<em><b>Inputs</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__INPUTS = TASK__INPUTS;

	/**
	 * The feature id for the '<em><b>Generates</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__GENERATES = TASK__GENERATES;

	/**
	 * The feature id for the '<em><b>Outputs</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__OUTPUTS = TASK__OUTPUTS;

	/**
	 * The feature id for the '<em><b>Parameters</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__PARAMETERS = TASK__PARAMETERS;

	/**
	 * The feature id for the '<em><b>Metadata</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__METADATA = TASK__METADATA;

	/**
	 * The feature id for the '<em><b>Ui</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__UI = TASK__UI;

	/**
	 * The feature id for the '<em><b>Node</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__NODE = TASK_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Link</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW__LINK = TASK_FEATURE_COUNT + 1;

	/**
	 * The number of structural features of the '<em>Workflow</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW_FEATURE_COUNT = TASK_FEATURE_COUNT + 2;

	/**
	 * The number of operations of the '<em>Workflow</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int WORKFLOW_OPERATION_COUNT = TASK_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.InputDataImpl <em>Input Data</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.InputDataImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getInputData()
	 * @generated
	 */
	int INPUT_DATA = 2;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INPUT_DATA__NAME = 0;

	/**
	 * The number of structural features of the '<em>Input Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INPUT_DATA_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Input Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INPUT_DATA_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ExternalInputDataImpl <em>External Input Data</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ExternalInputDataImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExternalInputData()
	 * @generated
	 */
	int EXTERNAL_INPUT_DATA = 3;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXTERNAL_INPUT_DATA__NAME = INPUT_DATA__NAME;

	/**
	 * The feature id for the '<em><b>Eligibility Condition</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXTERNAL_INPUT_DATA__ELIGIBILITY_CONDITION = INPUT_DATA_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>External Input Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXTERNAL_INPUT_DATA_FEATURE_COUNT = INPUT_DATA_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>External Input Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXTERNAL_INPUT_DATA_OPERATION_COUNT = INPUT_DATA_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.IntermediateInputDataImpl <em>Intermediate Input Data</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.IntermediateInputDataImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getIntermediateInputData()
	 * @generated
	 */
	int INTERMEDIATE_INPUT_DATA = 4;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INTERMEDIATE_INPUT_DATA__NAME = INPUT_DATA__NAME;

	/**
	 * The feature id for the '<em><b>Outputdata</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INTERMEDIATE_INPUT_DATA__OUTPUTDATA = INPUT_DATA_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Intermediate Input Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INTERMEDIATE_INPUT_DATA_FEATURE_COUNT = INPUT_DATA_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Intermediate Input Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INTERMEDIATE_INPUT_DATA_OPERATION_COUNT = INPUT_DATA_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.OutputDataImpl <em>Output Data</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.OutputDataImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getOutputData()
	 * @generated
	 */
	int OUTPUT_DATA = 5;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int OUTPUT_DATA__NAME = 0;

	/**
	 * The number of structural features of the '<em>Output Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int OUTPUT_DATA_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Output Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int OUTPUT_DATA_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.MetricImpl <em>Metric</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.MetricImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getMetric()
	 * @generated
	 */
	int METRIC = 6;

	/**
	 * The feature id for the '<em><b>Outputdata</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METRIC__OUTPUTDATA = 0;

	/**
	 * The number of structural features of the '<em>Metric</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METRIC_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Metric</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int METRIC_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ParameterImpl <em>Parameter</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ParameterImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParameter()
	 * @generated
	 */
	int PARAMETER = 7;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER__NAME = 0;

	/**
	 * The feature id for the '<em><b>Type</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER__TYPE = 1;

	/**
	 * The number of structural features of the '<em>Parameter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Parameter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.DynamicParameterImpl <em>Dynamic Parameter</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.DynamicParameterImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getDynamicParameter()
	 * @generated
	 */
	int DYNAMIC_PARAMETER = 8;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DYNAMIC_PARAMETER__NAME = PARAMETER__NAME;

	/**
	 * The feature id for the '<em><b>Type</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DYNAMIC_PARAMETER__TYPE = PARAMETER__TYPE;

	/**
	 * The feature id for the '<em><b>Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DYNAMIC_PARAMETER__VALUE = PARAMETER_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Dynamic Parameter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DYNAMIC_PARAMETER_FEATURE_COUNT = PARAMETER_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Dynamic Parameter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DYNAMIC_PARAMETER_OPERATION_COUNT = PARAMETER_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.StaticParameterImpl <em>Static Parameter</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.StaticParameterImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getStaticParameter()
	 * @generated
	 */
	int STATIC_PARAMETER = 9;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATIC_PARAMETER__NAME = PARAMETER__NAME;

	/**
	 * The feature id for the '<em><b>Type</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATIC_PARAMETER__TYPE = PARAMETER__TYPE;

	/**
	 * The feature id for the '<em><b>Value</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATIC_PARAMETER__VALUE = PARAMETER_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Static Parameter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATIC_PARAMETER_FEATURE_COUNT = PARAMETER_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Static Parameter</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATIC_PARAMETER_OPERATION_COUNT = PARAMETER_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ParameterTypeImpl <em>Parameter Type</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ParameterTypeImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParameterType()
	 * @generated
	 */
	int PARAMETER_TYPE = 10;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER_TYPE__NAME = 0;

	/**
	 * The number of structural features of the '<em>Parameter Type</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER_TYPE_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Parameter Type</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARAMETER_TYPE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ArrayImpl <em>Array</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ArrayImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getArray()
	 * @generated
	 */
	int ARRAY = 11;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARRAY__NAME = PARAMETER_TYPE__NAME;

	/**
	 * The feature id for the '<em><b>Length</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARRAY__LENGTH = PARAMETER_TYPE_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Type</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARRAY__TYPE = PARAMETER_TYPE_FEATURE_COUNT + 1;

	/**
	 * The number of structural features of the '<em>Array</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARRAY_FEATURE_COUNT = PARAMETER_TYPE_FEATURE_COUNT + 2;

	/**
	 * The number of operations of the '<em>Array</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARRAY_OPERATION_COUNT = PARAMETER_TYPE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.StructureImpl <em>Structure</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.StructureImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getStructure()
	 * @generated
	 */
	int STRUCTURE = 12;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STRUCTURE__NAME = PARAMETER_TYPE__NAME;

	/**
	 * The feature id for the '<em><b>Fields</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STRUCTURE__FIELDS = PARAMETER_TYPE_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Structure</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STRUCTURE_FEATURE_COUNT = PARAMETER_TYPE_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Structure</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STRUCTURE_OPERATION_COUNT = PARAMETER_TYPE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.FieldImpl <em>Field</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.FieldImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getField()
	 * @generated
	 */
	int FIELD = 13;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FIELD__NAME = 0;

	/**
	 * The feature id for the '<em><b>Type</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FIELD__TYPE = 1;

	/**
	 * The number of structural features of the '<em>Field</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FIELD_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Field</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FIELD_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.OperatorImpl <em>Operator</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.OperatorImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getOperator()
	 * @generated
	 */
	int OPERATOR = 15;

	/**
	 * The number of structural features of the '<em>Operator</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int OPERATOR_FEATURE_COUNT = NODE_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Operator</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int OPERATOR_OPERATION_COUNT = NODE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.LinkImpl <em>Link</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.LinkImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getLink()
	 * @generated
	 */
	int LINK = 16;

	/**
	 * The feature id for the '<em><b>Output</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LINK__OUTPUT = 0;

	/**
	 * The feature id for the '<em><b>Input</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LINK__INPUT = 1;

	/**
	 * The number of structural features of the '<em>Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LINK_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LINK_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ConditionalLinkImpl <em>Conditional Link</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ConditionalLinkImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getConditionalLink()
	 * @generated
	 */
	int CONDITIONAL_LINK = 17;

	/**
	 * The feature id for the '<em><b>Output</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITIONAL_LINK__OUTPUT = LINK__OUTPUT;

	/**
	 * The feature id for the '<em><b>Input</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITIONAL_LINK__INPUT = LINK__INPUT;

	/**
	 * The feature id for the '<em><b>Condition</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITIONAL_LINK__CONDITION = LINK_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Conditional Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITIONAL_LINK_FEATURE_COUNT = LINK_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Conditional Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITIONAL_LINK_OPERATION_COUNT = LINK_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.RegularLinkImpl <em>Regular Link</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.RegularLinkImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getRegularLink()
	 * @generated
	 */
	int REGULAR_LINK = 18;

	/**
	 * The feature id for the '<em><b>Output</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REGULAR_LINK__OUTPUT = LINK__OUTPUT;

	/**
	 * The feature id for the '<em><b>Input</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REGULAR_LINK__INPUT = LINK__INPUT;

	/**
	 * The number of structural features of the '<em>Regular Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REGULAR_LINK_FEATURE_COUNT = LINK_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Regular Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int REGULAR_LINK_OPERATION_COUNT = LINK_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ExceptionalLinkImpl <em>Exceptional Link</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ExceptionalLinkImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExceptionalLink()
	 * @generated
	 */
	int EXCEPTIONAL_LINK = 19;

	/**
	 * The feature id for the '<em><b>Output</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCEPTIONAL_LINK__OUTPUT = LINK__OUTPUT;

	/**
	 * The feature id for the '<em><b>Input</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCEPTIONAL_LINK__INPUT = LINK__INPUT;

	/**
	 * The feature id for the '<em><b>Event</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCEPTIONAL_LINK__EVENT = LINK_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Exceptional Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCEPTIONAL_LINK_FEATURE_COUNT = LINK_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Exceptional Link</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCEPTIONAL_LINK_OPERATION_COUNT = LINK_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.UIImpl <em>UI</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.UIImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getUI()
	 * @generated
	 */
	int UI = 20;

	/**
	 * The number of structural features of the '<em>UI</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UI_FEATURE_COUNT = 0;

	/**
	 * The number of operations of the '<em>UI</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UI_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.GroupImpl <em>Group</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.GroupImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getGroup()
	 * @generated
	 */
	int GROUP = 21;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GROUP__NAME = 0;

	/**
	 * The feature id for the '<em><b>Metadata</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GROUP__METADATA = 1;

	/**
	 * The feature id for the '<em><b>Task</b></em>' reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GROUP__TASK = 2;

	/**
	 * The feature id for the '<em><b>Ui</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GROUP__UI = 3;

	/**
	 * The number of structural features of the '<em>Group</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GROUP_FEATURE_COUNT = 4;

	/**
	 * The number of operations of the '<em>Group</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GROUP_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.MetaDataImpl <em>Meta Data</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.MetaDataImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getMetaData()
	 * @generated
	 */
	int META_DATA = 22;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int META_DATA__NAME = 0;

	/**
	 * The feature id for the '<em><b>Value</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int META_DATA__VALUE = 1;

	/**
	 * The number of structural features of the '<em>Meta Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int META_DATA_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Meta Data</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int META_DATA_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ParallelImpl <em>Parallel</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ParallelImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParallel()
	 * @generated
	 */
	int PARALLEL = 23;

	/**
	 * The number of structural features of the '<em>Parallel</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARALLEL_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Parallel</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARALLEL_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ExclusiveImpl <em>Exclusive</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ExclusiveImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExclusive()
	 * @generated
	 */
	int EXCLUSIVE = 24;

	/**
	 * The feature id for the '<em><b>Condition</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCLUSIVE__CONDITION = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Exclusive</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCLUSIVE_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Exclusive</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCLUSIVE_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.InclusiveImpl <em>Inclusive</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.InclusiveImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getInclusive()
	 * @generated
	 */
	int INCLUSIVE = 25;

	/**
	 * The feature id for the '<em><b>Conditions</b></em>' attribute list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INCLUSIVE__CONDITIONS = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Inclusive</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INCLUSIVE_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Inclusive</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INCLUSIVE_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ComplexImpl <em>Complex</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ComplexImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getComplex()
	 * @generated
	 */
	int COMPLEX = 26;

	/**
	 * The feature id for the '<em><b>Complex Condition</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int COMPLEX__COMPLEX_CONDITION = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Complex</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int COMPLEX_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Complex</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int COMPLEX_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ParallelJoinImpl <em>Parallel Join</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ParallelJoinImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParallelJoin()
	 * @generated
	 */
	int PARALLEL_JOIN = 27;

	/**
	 * The number of structural features of the '<em>Parallel Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARALLEL_JOIN_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Parallel Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PARALLEL_JOIN_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ExclusiveJoinImpl <em>Exclusive Join</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ExclusiveJoinImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExclusiveJoin()
	 * @generated
	 */
	int EXCLUSIVE_JOIN = 28;

	/**
	 * The number of structural features of the '<em>Exclusive Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCLUSIVE_JOIN_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Exclusive Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EXCLUSIVE_JOIN_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.InclusiveJoinImpl <em>Inclusive Join</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.InclusiveJoinImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getInclusiveJoin()
	 * @generated
	 */
	int INCLUSIVE_JOIN = 29;

	/**
	 * The number of structural features of the '<em>Inclusive Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INCLUSIVE_JOIN_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Inclusive Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int INCLUSIVE_JOIN_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.ComplexJoinImpl <em>Complex Join</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.ComplexJoinImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getComplexJoin()
	 * @generated
	 */
	int COMPLEX_JOIN = 30;

	/**
	 * The number of structural features of the '<em>Complex Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int COMPLEX_JOIN_FEATURE_COUNT = OPERATOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Complex Join</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int COMPLEX_JOIN_OPERATION_COUNT = OPERATOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.EventNodeImpl <em>Event Node</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.EventNodeImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getEventNode()
	 * @generated
	 */
	int EVENT_NODE = 31;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EVENT_NODE__NAME = NODE_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Event Node</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EVENT_NODE_FEATURE_COUNT = NODE_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Event Node</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int EVENT_NODE_OPERATION_COUNT = NODE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.impl.PrimitiveTypeImpl <em>Primitive Type</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.impl.PrimitiveTypeImpl
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getPrimitiveType()
	 * @generated
	 */
	int PRIMITIVE_TYPE = 32;

	/**
	 * The feature id for the '<em><b>Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PRIMITIVE_TYPE__NAME = PARAMETER_TYPE__NAME;

	/**
	 * The feature id for the '<em><b>Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PRIMITIVE_TYPE__TYPE = PARAMETER_TYPE_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Primitive Type</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PRIMITIVE_TYPE_FEATURE_COUNT = PARAMETER_TYPE_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Primitive Type</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int PRIMITIVE_TYPE_OPERATION_COUNT = PARAMETER_TYPE_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.Event <em>Event</em>}' enum.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.Event
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getEvent()
	 * @generated
	 */
	int EVENT = 33;

	/**
	 * The meta object id for the '{@link com.extremexp.emf.model.workflow.Primitive <em>Primitive</em>}' enum.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see com.extremexp.emf.model.workflow.Primitive
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getPrimitive()
	 * @generated
	 */
	int PRIMITIVE = 34;

	/**
	 * The meta object id for the '<em>New Data Type3</em>' data type.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see java.lang.Object
	 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getNewDataType3()
	 * @generated
	 */
	int NEW_DATA_TYPE3 = 35;

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Workflow <em>Workflow</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Workflow</em>'.
	 * @see com.extremexp.emf.model.workflow.Workflow
	 * @generated
	 */
	EClass getWorkflow();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Workflow#getNode <em>Node</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Node</em>'.
	 * @see com.extremexp.emf.model.workflow.Workflow#getNode()
	 * @see #getWorkflow()
	 * @generated
	 */
	EReference getWorkflow_Node();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Workflow#getLink <em>Link</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Link</em>'.
	 * @see com.extremexp.emf.model.workflow.Workflow#getLink()
	 * @see #getWorkflow()
	 * @generated
	 */
	EReference getWorkflow_Link();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Node <em>Node</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Node</em>'.
	 * @see com.extremexp.emf.model.workflow.Node
	 * @generated
	 */
	EClass getNode();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.InputData <em>Input Data</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Input Data</em>'.
	 * @see com.extremexp.emf.model.workflow.InputData
	 * @generated
	 */
	EClass getInputData();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.InputData#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.InputData#getName()
	 * @see #getInputData()
	 * @generated
	 */
	EAttribute getInputData_Name();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ExternalInputData <em>External Input Data</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>External Input Data</em>'.
	 * @see com.extremexp.emf.model.workflow.ExternalInputData
	 * @generated
	 */
	EClass getExternalInputData();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.ExternalInputData#isEligibilityCondition <em>Eligibility Condition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Eligibility Condition</em>'.
	 * @see com.extremexp.emf.model.workflow.ExternalInputData#isEligibilityCondition()
	 * @see #getExternalInputData()
	 * @generated
	 */
	EAttribute getExternalInputData_EligibilityCondition();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.IntermediateInputData <em>Intermediate Input Data</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Intermediate Input Data</em>'.
	 * @see com.extremexp.emf.model.workflow.IntermediateInputData
	 * @generated
	 */
	EClass getIntermediateInputData();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.IntermediateInputData#getOutputdata <em>Outputdata</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Outputdata</em>'.
	 * @see com.extremexp.emf.model.workflow.IntermediateInputData#getOutputdata()
	 * @see #getIntermediateInputData()
	 * @generated
	 */
	EReference getIntermediateInputData_Outputdata();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.OutputData <em>Output Data</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Output Data</em>'.
	 * @see com.extremexp.emf.model.workflow.OutputData
	 * @generated
	 */
	EClass getOutputData();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.OutputData#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.OutputData#getName()
	 * @see #getOutputData()
	 * @generated
	 */
	EAttribute getOutputData_Name();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Metric <em>Metric</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Metric</em>'.
	 * @see com.extremexp.emf.model.workflow.Metric
	 * @generated
	 */
	EClass getMetric();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Metric#getOutputdata <em>Outputdata</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Outputdata</em>'.
	 * @see com.extremexp.emf.model.workflow.Metric#getOutputdata()
	 * @see #getMetric()
	 * @generated
	 */
	EReference getMetric_Outputdata();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Parameter <em>Parameter</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Parameter</em>'.
	 * @see com.extremexp.emf.model.workflow.Parameter
	 * @generated
	 */
	EClass getParameter();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Parameter#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.Parameter#getName()
	 * @see #getParameter()
	 * @generated
	 */
	EAttribute getParameter_Name();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Parameter#getType <em>Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Type</em>'.
	 * @see com.extremexp.emf.model.workflow.Parameter#getType()
	 * @see #getParameter()
	 * @generated
	 */
	EReference getParameter_Type();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.DynamicParameter <em>Dynamic Parameter</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Dynamic Parameter</em>'.
	 * @see com.extremexp.emf.model.workflow.DynamicParameter
	 * @generated
	 */
	EClass getDynamicParameter();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.DynamicParameter#getValue <em>Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Value</em>'.
	 * @see com.extremexp.emf.model.workflow.DynamicParameter#getValue()
	 * @see #getDynamicParameter()
	 * @generated
	 */
	EReference getDynamicParameter_Value();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.StaticParameter <em>Static Parameter</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Static Parameter</em>'.
	 * @see com.extremexp.emf.model.workflow.StaticParameter
	 * @generated
	 */
	EClass getStaticParameter();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.StaticParameter#getValue <em>Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Value</em>'.
	 * @see com.extremexp.emf.model.workflow.StaticParameter#getValue()
	 * @see #getStaticParameter()
	 * @generated
	 */
	EAttribute getStaticParameter_Value();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ParameterType <em>Parameter Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Parameter Type</em>'.
	 * @see com.extremexp.emf.model.workflow.ParameterType
	 * @generated
	 */
	EClass getParameterType();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.ParameterType#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.ParameterType#getName()
	 * @see #getParameterType()
	 * @generated
	 */
	EAttribute getParameterType_Name();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Array <em>Array</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Array</em>'.
	 * @see com.extremexp.emf.model.workflow.Array
	 * @generated
	 */
	EClass getArray();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Array#getLength <em>Length</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Length</em>'.
	 * @see com.extremexp.emf.model.workflow.Array#getLength()
	 * @see #getArray()
	 * @generated
	 */
	EAttribute getArray_Length();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Array#getType <em>Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Type</em>'.
	 * @see com.extremexp.emf.model.workflow.Array#getType()
	 * @see #getArray()
	 * @generated
	 */
	EReference getArray_Type();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Structure <em>Structure</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Structure</em>'.
	 * @see com.extremexp.emf.model.workflow.Structure
	 * @generated
	 */
	EClass getStructure();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Structure#getFields <em>Fields</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Fields</em>'.
	 * @see com.extremexp.emf.model.workflow.Structure#getFields()
	 * @see #getStructure()
	 * @generated
	 */
	EReference getStructure_Fields();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Field <em>Field</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Field</em>'.
	 * @see com.extremexp.emf.model.workflow.Field
	 * @generated
	 */
	EClass getField();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Field#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.Field#getName()
	 * @see #getField()
	 * @generated
	 */
	EAttribute getField_Name();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Field#getType <em>Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Type</em>'.
	 * @see com.extremexp.emf.model.workflow.Field#getType()
	 * @see #getField()
	 * @generated
	 */
	EReference getField_Type();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Task <em>Task</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Task</em>'.
	 * @see com.extremexp.emf.model.workflow.Task
	 * @generated
	 */
	EClass getTask();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Task#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getName()
	 * @see #getTask()
	 * @generated
	 */
	EAttribute getTask_Name();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Task#getDescription <em>Description</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Description</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getDescription()
	 * @see #getTask()
	 * @generated
	 */
	EAttribute getTask_Description();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Task#isIsAbstract <em>Is Abstract</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Is Abstract</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#isIsAbstract()
	 * @see #getTask()
	 * @generated
	 */
	EAttribute getTask_IsAbstract();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Task#getImplementationRef <em>Implementation Ref</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Implementation Ref</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getImplementationRef()
	 * @see #getTask()
	 * @generated
	 */
	EAttribute getTask_ImplementationRef();

	/**
	 * Returns the meta object for the containment reference '{@link com.extremexp.emf.model.workflow.Task#getSubworkflow <em>Subworkflow</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference '<em>Subworkflow</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getSubworkflow()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Subworkflow();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Task#getInputs <em>Inputs</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Inputs</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getInputs()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Inputs();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Task#getGenerates <em>Generates</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Generates</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getGenerates()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Generates();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Task#getOutputs <em>Outputs</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Outputs</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getOutputs()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Outputs();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Task#getParameters <em>Parameters</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Parameters</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getParameters()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Parameters();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Task#getMetadata <em>Metadata</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Metadata</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getMetadata()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Metadata();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Task#getUi <em>Ui</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Ui</em>'.
	 * @see com.extremexp.emf.model.workflow.Task#getUi()
	 * @see #getTask()
	 * @generated
	 */
	EReference getTask_Ui();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Operator <em>Operator</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Operator</em>'.
	 * @see com.extremexp.emf.model.workflow.Operator
	 * @generated
	 */
	EClass getOperator();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Link <em>Link</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Link</em>'.
	 * @see com.extremexp.emf.model.workflow.Link
	 * @generated
	 */
	EClass getLink();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Link#getOutput <em>Output</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Output</em>'.
	 * @see com.extremexp.emf.model.workflow.Link#getOutput()
	 * @see #getLink()
	 * @generated
	 */
	EReference getLink_Output();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Link#getInput <em>Input</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Input</em>'.
	 * @see com.extremexp.emf.model.workflow.Link#getInput()
	 * @see #getLink()
	 * @generated
	 */
	EReference getLink_Input();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ConditionalLink <em>Conditional Link</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Conditional Link</em>'.
	 * @see com.extremexp.emf.model.workflow.ConditionalLink
	 * @generated
	 */
	EClass getConditionalLink();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.ConditionalLink#getCondition <em>Condition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Condition</em>'.
	 * @see com.extremexp.emf.model.workflow.ConditionalLink#getCondition()
	 * @see #getConditionalLink()
	 * @generated
	 */
	EAttribute getConditionalLink_Condition();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.RegularLink <em>Regular Link</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Regular Link</em>'.
	 * @see com.extremexp.emf.model.workflow.RegularLink
	 * @generated
	 */
	EClass getRegularLink();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ExceptionalLink <em>Exceptional Link</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Exceptional Link</em>'.
	 * @see com.extremexp.emf.model.workflow.ExceptionalLink
	 * @generated
	 */
	EClass getExceptionalLink();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.ExceptionalLink#getEvent <em>Event</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Event</em>'.
	 * @see com.extremexp.emf.model.workflow.ExceptionalLink#getEvent()
	 * @see #getExceptionalLink()
	 * @generated
	 */
	EAttribute getExceptionalLink_Event();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.UI <em>UI</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>UI</em>'.
	 * @see com.extremexp.emf.model.workflow.UI
	 * @generated
	 */
	EClass getUI();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Group <em>Group</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Group</em>'.
	 * @see com.extremexp.emf.model.workflow.Group
	 * @generated
	 */
	EClass getGroup();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Group#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.Group#getName()
	 * @see #getGroup()
	 * @generated
	 */
	EAttribute getGroup_Name();

	/**
	 * Returns the meta object for the containment reference list '{@link com.extremexp.emf.model.workflow.Group#getMetadata <em>Metadata</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Metadata</em>'.
	 * @see com.extremexp.emf.model.workflow.Group#getMetadata()
	 * @see #getGroup()
	 * @generated
	 */
	EReference getGroup_Metadata();

	/**
	 * Returns the meta object for the reference list '{@link com.extremexp.emf.model.workflow.Group#getTask <em>Task</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference list '<em>Task</em>'.
	 * @see com.extremexp.emf.model.workflow.Group#getTask()
	 * @see #getGroup()
	 * @generated
	 */
	EReference getGroup_Task();

	/**
	 * Returns the meta object for the reference '{@link com.extremexp.emf.model.workflow.Group#getUi <em>Ui</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Ui</em>'.
	 * @see com.extremexp.emf.model.workflow.Group#getUi()
	 * @see #getGroup()
	 * @generated
	 */
	EReference getGroup_Ui();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.MetaData <em>Meta Data</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Meta Data</em>'.
	 * @see com.extremexp.emf.model.workflow.MetaData
	 * @generated
	 */
	EClass getMetaData();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.MetaData#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.MetaData#getName()
	 * @see #getMetaData()
	 * @generated
	 */
	EAttribute getMetaData_Name();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.MetaData#getValue <em>Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Value</em>'.
	 * @see com.extremexp.emf.model.workflow.MetaData#getValue()
	 * @see #getMetaData()
	 * @generated
	 */
	EAttribute getMetaData_Value();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Parallel <em>Parallel</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Parallel</em>'.
	 * @see com.extremexp.emf.model.workflow.Parallel
	 * @generated
	 */
	EClass getParallel();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Exclusive <em>Exclusive</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Exclusive</em>'.
	 * @see com.extremexp.emf.model.workflow.Exclusive
	 * @generated
	 */
	EClass getExclusive();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Exclusive#isCondition <em>Condition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Condition</em>'.
	 * @see com.extremexp.emf.model.workflow.Exclusive#isCondition()
	 * @see #getExclusive()
	 * @generated
	 */
	EAttribute getExclusive_Condition();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Inclusive <em>Inclusive</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Inclusive</em>'.
	 * @see com.extremexp.emf.model.workflow.Inclusive
	 * @generated
	 */
	EClass getInclusive();

	/**
	 * Returns the meta object for the attribute list '{@link com.extremexp.emf.model.workflow.Inclusive#getConditions <em>Conditions</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute list '<em>Conditions</em>'.
	 * @see com.extremexp.emf.model.workflow.Inclusive#getConditions()
	 * @see #getInclusive()
	 * @generated
	 */
	EAttribute getInclusive_Conditions();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.Complex <em>Complex</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Complex</em>'.
	 * @see com.extremexp.emf.model.workflow.Complex
	 * @generated
	 */
	EClass getComplex();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.Complex#isComplexCondition <em>Complex Condition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Complex Condition</em>'.
	 * @see com.extremexp.emf.model.workflow.Complex#isComplexCondition()
	 * @see #getComplex()
	 * @generated
	 */
	EAttribute getComplex_ComplexCondition();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ParallelJoin <em>Parallel Join</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Parallel Join</em>'.
	 * @see com.extremexp.emf.model.workflow.ParallelJoin
	 * @generated
	 */
	EClass getParallelJoin();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ExclusiveJoin <em>Exclusive Join</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Exclusive Join</em>'.
	 * @see com.extremexp.emf.model.workflow.ExclusiveJoin
	 * @generated
	 */
	EClass getExclusiveJoin();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.InclusiveJoin <em>Inclusive Join</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Inclusive Join</em>'.
	 * @see com.extremexp.emf.model.workflow.InclusiveJoin
	 * @generated
	 */
	EClass getInclusiveJoin();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.ComplexJoin <em>Complex Join</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Complex Join</em>'.
	 * @see com.extremexp.emf.model.workflow.ComplexJoin
	 * @generated
	 */
	EClass getComplexJoin();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.EventNode <em>Event Node</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Event Node</em>'.
	 * @see com.extremexp.emf.model.workflow.EventNode
	 * @generated
	 */
	EClass getEventNode();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.EventNode#getName <em>Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Name</em>'.
	 * @see com.extremexp.emf.model.workflow.EventNode#getName()
	 * @see #getEventNode()
	 * @generated
	 */
	EAttribute getEventNode_Name();

	/**
	 * Returns the meta object for class '{@link com.extremexp.emf.model.workflow.PrimitiveType <em>Primitive Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Primitive Type</em>'.
	 * @see com.extremexp.emf.model.workflow.PrimitiveType
	 * @generated
	 */
	EClass getPrimitiveType();

	/**
	 * Returns the meta object for the attribute '{@link com.extremexp.emf.model.workflow.PrimitiveType#getType <em>Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Type</em>'.
	 * @see com.extremexp.emf.model.workflow.PrimitiveType#getType()
	 * @see #getPrimitiveType()
	 * @generated
	 */
	EAttribute getPrimitiveType_Type();

	/**
	 * Returns the meta object for enum '{@link com.extremexp.emf.model.workflow.Event <em>Event</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for enum '<em>Event</em>'.
	 * @see com.extremexp.emf.model.workflow.Event
	 * @generated
	 */
	EEnum getEvent();

	/**
	 * Returns the meta object for enum '{@link com.extremexp.emf.model.workflow.Primitive <em>Primitive</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for enum '<em>Primitive</em>'.
	 * @see com.extremexp.emf.model.workflow.Primitive
	 * @generated
	 */
	EEnum getPrimitive();

	/**
	 * Returns the meta object for data type '{@link java.lang.Object <em>New Data Type3</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for data type '<em>New Data Type3</em>'.
	 * @see java.lang.Object
	 * @model instanceClass="java.lang.Object"
	 * @generated
	 */
	EDataType getNewDataType3();

	/**
	 * Returns the factory that creates the instances of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the factory that creates the instances of the model.
	 * @generated
	 */
	WorkflowFactory getWorkflowFactory();

	/**
	 * <!-- begin-user-doc -->
	 * Defines literals for the meta objects that represent
	 * <ul>
	 *   <li>each class,</li>
	 *   <li>each feature of each class,</li>
	 *   <li>each operation of each class,</li>
	 *   <li>each enum,</li>
	 *   <li>and each data type</li>
	 * </ul>
	 * <!-- end-user-doc -->
	 * @generated
	 */
	interface Literals {
		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.WorkflowImpl <em>Workflow</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getWorkflow()
		 * @generated
		 */
		EClass WORKFLOW = eINSTANCE.getWorkflow();

		/**
		 * The meta object literal for the '<em><b>Node</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference WORKFLOW__NODE = eINSTANCE.getWorkflow_Node();

		/**
		 * The meta object literal for the '<em><b>Link</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference WORKFLOW__LINK = eINSTANCE.getWorkflow_Link();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.NodeImpl <em>Node</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.NodeImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getNode()
		 * @generated
		 */
		EClass NODE = eINSTANCE.getNode();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.InputDataImpl <em>Input Data</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.InputDataImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getInputData()
		 * @generated
		 */
		EClass INPUT_DATA = eINSTANCE.getInputData();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute INPUT_DATA__NAME = eINSTANCE.getInputData_Name();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ExternalInputDataImpl <em>External Input Data</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ExternalInputDataImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExternalInputData()
		 * @generated
		 */
		EClass EXTERNAL_INPUT_DATA = eINSTANCE.getExternalInputData();

		/**
		 * The meta object literal for the '<em><b>Eligibility Condition</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute EXTERNAL_INPUT_DATA__ELIGIBILITY_CONDITION = eINSTANCE.getExternalInputData_EligibilityCondition();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.IntermediateInputDataImpl <em>Intermediate Input Data</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.IntermediateInputDataImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getIntermediateInputData()
		 * @generated
		 */
		EClass INTERMEDIATE_INPUT_DATA = eINSTANCE.getIntermediateInputData();

		/**
		 * The meta object literal for the '<em><b>Outputdata</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference INTERMEDIATE_INPUT_DATA__OUTPUTDATA = eINSTANCE.getIntermediateInputData_Outputdata();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.OutputDataImpl <em>Output Data</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.OutputDataImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getOutputData()
		 * @generated
		 */
		EClass OUTPUT_DATA = eINSTANCE.getOutputData();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute OUTPUT_DATA__NAME = eINSTANCE.getOutputData_Name();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.MetricImpl <em>Metric</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.MetricImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getMetric()
		 * @generated
		 */
		EClass METRIC = eINSTANCE.getMetric();

		/**
		 * The meta object literal for the '<em><b>Outputdata</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference METRIC__OUTPUTDATA = eINSTANCE.getMetric_Outputdata();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ParameterImpl <em>Parameter</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ParameterImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParameter()
		 * @generated
		 */
		EClass PARAMETER = eINSTANCE.getParameter();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PARAMETER__NAME = eINSTANCE.getParameter_Name();

		/**
		 * The meta object literal for the '<em><b>Type</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference PARAMETER__TYPE = eINSTANCE.getParameter_Type();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.DynamicParameterImpl <em>Dynamic Parameter</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.DynamicParameterImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getDynamicParameter()
		 * @generated
		 */
		EClass DYNAMIC_PARAMETER = eINSTANCE.getDynamicParameter();

		/**
		 * The meta object literal for the '<em><b>Value</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference DYNAMIC_PARAMETER__VALUE = eINSTANCE.getDynamicParameter_Value();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.StaticParameterImpl <em>Static Parameter</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.StaticParameterImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getStaticParameter()
		 * @generated
		 */
		EClass STATIC_PARAMETER = eINSTANCE.getStaticParameter();

		/**
		 * The meta object literal for the '<em><b>Value</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute STATIC_PARAMETER__VALUE = eINSTANCE.getStaticParameter_Value();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ParameterTypeImpl <em>Parameter Type</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ParameterTypeImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParameterType()
		 * @generated
		 */
		EClass PARAMETER_TYPE = eINSTANCE.getParameterType();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PARAMETER_TYPE__NAME = eINSTANCE.getParameterType_Name();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ArrayImpl <em>Array</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ArrayImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getArray()
		 * @generated
		 */
		EClass ARRAY = eINSTANCE.getArray();

		/**
		 * The meta object literal for the '<em><b>Length</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ARRAY__LENGTH = eINSTANCE.getArray_Length();

		/**
		 * The meta object literal for the '<em><b>Type</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARRAY__TYPE = eINSTANCE.getArray_Type();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.StructureImpl <em>Structure</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.StructureImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getStructure()
		 * @generated
		 */
		EClass STRUCTURE = eINSTANCE.getStructure();

		/**
		 * The meta object literal for the '<em><b>Fields</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference STRUCTURE__FIELDS = eINSTANCE.getStructure_Fields();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.FieldImpl <em>Field</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.FieldImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getField()
		 * @generated
		 */
		EClass FIELD = eINSTANCE.getField();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FIELD__NAME = eINSTANCE.getField_Name();

		/**
		 * The meta object literal for the '<em><b>Type</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FIELD__TYPE = eINSTANCE.getField_Type();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.TaskImpl <em>Task</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.TaskImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getTask()
		 * @generated
		 */
		EClass TASK = eINSTANCE.getTask();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute TASK__NAME = eINSTANCE.getTask_Name();

		/**
		 * The meta object literal for the '<em><b>Description</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute TASK__DESCRIPTION = eINSTANCE.getTask_Description();

		/**
		 * The meta object literal for the '<em><b>Is Abstract</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute TASK__IS_ABSTRACT = eINSTANCE.getTask_IsAbstract();

		/**
		 * The meta object literal for the '<em><b>Implementation Ref</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute TASK__IMPLEMENTATION_REF = eINSTANCE.getTask_ImplementationRef();

		/**
		 * The meta object literal for the '<em><b>Subworkflow</b></em>' containment reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__SUBWORKFLOW = eINSTANCE.getTask_Subworkflow();

		/**
		 * The meta object literal for the '<em><b>Inputs</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__INPUTS = eINSTANCE.getTask_Inputs();

		/**
		 * The meta object literal for the '<em><b>Generates</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__GENERATES = eINSTANCE.getTask_Generates();

		/**
		 * The meta object literal for the '<em><b>Outputs</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__OUTPUTS = eINSTANCE.getTask_Outputs();

		/**
		 * The meta object literal for the '<em><b>Parameters</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__PARAMETERS = eINSTANCE.getTask_Parameters();

		/**
		 * The meta object literal for the '<em><b>Metadata</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__METADATA = eINSTANCE.getTask_Metadata();

		/**
		 * The meta object literal for the '<em><b>Ui</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference TASK__UI = eINSTANCE.getTask_Ui();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.OperatorImpl <em>Operator</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.OperatorImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getOperator()
		 * @generated
		 */
		EClass OPERATOR = eINSTANCE.getOperator();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.LinkImpl <em>Link</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.LinkImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getLink()
		 * @generated
		 */
		EClass LINK = eINSTANCE.getLink();

		/**
		 * The meta object literal for the '<em><b>Output</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference LINK__OUTPUT = eINSTANCE.getLink_Output();

		/**
		 * The meta object literal for the '<em><b>Input</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference LINK__INPUT = eINSTANCE.getLink_Input();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ConditionalLinkImpl <em>Conditional Link</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ConditionalLinkImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getConditionalLink()
		 * @generated
		 */
		EClass CONDITIONAL_LINK = eINSTANCE.getConditionalLink();

		/**
		 * The meta object literal for the '<em><b>Condition</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute CONDITIONAL_LINK__CONDITION = eINSTANCE.getConditionalLink_Condition();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.RegularLinkImpl <em>Regular Link</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.RegularLinkImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getRegularLink()
		 * @generated
		 */
		EClass REGULAR_LINK = eINSTANCE.getRegularLink();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ExceptionalLinkImpl <em>Exceptional Link</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ExceptionalLinkImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExceptionalLink()
		 * @generated
		 */
		EClass EXCEPTIONAL_LINK = eINSTANCE.getExceptionalLink();

		/**
		 * The meta object literal for the '<em><b>Event</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute EXCEPTIONAL_LINK__EVENT = eINSTANCE.getExceptionalLink_Event();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.UIImpl <em>UI</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.UIImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getUI()
		 * @generated
		 */
		EClass UI = eINSTANCE.getUI();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.GroupImpl <em>Group</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.GroupImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getGroup()
		 * @generated
		 */
		EClass GROUP = eINSTANCE.getGroup();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute GROUP__NAME = eINSTANCE.getGroup_Name();

		/**
		 * The meta object literal for the '<em><b>Metadata</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference GROUP__METADATA = eINSTANCE.getGroup_Metadata();

		/**
		 * The meta object literal for the '<em><b>Task</b></em>' reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference GROUP__TASK = eINSTANCE.getGroup_Task();

		/**
		 * The meta object literal for the '<em><b>Ui</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference GROUP__UI = eINSTANCE.getGroup_Ui();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.MetaDataImpl <em>Meta Data</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.MetaDataImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getMetaData()
		 * @generated
		 */
		EClass META_DATA = eINSTANCE.getMetaData();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute META_DATA__NAME = eINSTANCE.getMetaData_Name();

		/**
		 * The meta object literal for the '<em><b>Value</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute META_DATA__VALUE = eINSTANCE.getMetaData_Value();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ParallelImpl <em>Parallel</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ParallelImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParallel()
		 * @generated
		 */
		EClass PARALLEL = eINSTANCE.getParallel();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ExclusiveImpl <em>Exclusive</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ExclusiveImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExclusive()
		 * @generated
		 */
		EClass EXCLUSIVE = eINSTANCE.getExclusive();

		/**
		 * The meta object literal for the '<em><b>Condition</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute EXCLUSIVE__CONDITION = eINSTANCE.getExclusive_Condition();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.InclusiveImpl <em>Inclusive</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.InclusiveImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getInclusive()
		 * @generated
		 */
		EClass INCLUSIVE = eINSTANCE.getInclusive();

		/**
		 * The meta object literal for the '<em><b>Conditions</b></em>' attribute list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute INCLUSIVE__CONDITIONS = eINSTANCE.getInclusive_Conditions();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ComplexImpl <em>Complex</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ComplexImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getComplex()
		 * @generated
		 */
		EClass COMPLEX = eINSTANCE.getComplex();

		/**
		 * The meta object literal for the '<em><b>Complex Condition</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute COMPLEX__COMPLEX_CONDITION = eINSTANCE.getComplex_ComplexCondition();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ParallelJoinImpl <em>Parallel Join</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ParallelJoinImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getParallelJoin()
		 * @generated
		 */
		EClass PARALLEL_JOIN = eINSTANCE.getParallelJoin();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ExclusiveJoinImpl <em>Exclusive Join</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ExclusiveJoinImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getExclusiveJoin()
		 * @generated
		 */
		EClass EXCLUSIVE_JOIN = eINSTANCE.getExclusiveJoin();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.InclusiveJoinImpl <em>Inclusive Join</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.InclusiveJoinImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getInclusiveJoin()
		 * @generated
		 */
		EClass INCLUSIVE_JOIN = eINSTANCE.getInclusiveJoin();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.ComplexJoinImpl <em>Complex Join</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.ComplexJoinImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getComplexJoin()
		 * @generated
		 */
		EClass COMPLEX_JOIN = eINSTANCE.getComplexJoin();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.EventNodeImpl <em>Event Node</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.EventNodeImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getEventNode()
		 * @generated
		 */
		EClass EVENT_NODE = eINSTANCE.getEventNode();

		/**
		 * The meta object literal for the '<em><b>Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute EVENT_NODE__NAME = eINSTANCE.getEventNode_Name();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.impl.PrimitiveTypeImpl <em>Primitive Type</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.impl.PrimitiveTypeImpl
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getPrimitiveType()
		 * @generated
		 */
		EClass PRIMITIVE_TYPE = eINSTANCE.getPrimitiveType();

		/**
		 * The meta object literal for the '<em><b>Type</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute PRIMITIVE_TYPE__TYPE = eINSTANCE.getPrimitiveType_Type();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.Event <em>Event</em>}' enum.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.Event
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getEvent()
		 * @generated
		 */
		EEnum EVENT = eINSTANCE.getEvent();

		/**
		 * The meta object literal for the '{@link com.extremexp.emf.model.workflow.Primitive <em>Primitive</em>}' enum.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see com.extremexp.emf.model.workflow.Primitive
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getPrimitive()
		 * @generated
		 */
		EEnum PRIMITIVE = eINSTANCE.getPrimitive();

		/**
		 * The meta object literal for the '<em>New Data Type3</em>' data type.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see java.lang.Object
		 * @see com.extremexp.emf.model.workflow.impl.WorkflowPackageImpl#getNewDataType3()
		 * @generated
		 */
		EDataType NEW_DATA_TYPE3 = eINSTANCE.getNewDataType3();

	}

} //WorkflowPackage
