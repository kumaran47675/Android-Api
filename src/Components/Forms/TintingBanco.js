// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useForm } from "antd/es/form/Form";
// import { Col, Row, Button, Form, Input, DatePicker, InputNumber, Select, Switch } from "antd";
// import axios from "axios";
// import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

// const Tinting = ({ username }) => {
//   const handleSubmit = () => {
//     let formData = FormInsert.getFieldValue();
//     formData["CreateBy"] = username;
//     const date = new Date();
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     formData["day"] = day;
//     formData["month"] = month;
//     formData["year"] = year;
//     console.log(JSON.stringify(formData));
//     axios
//       .post("http://localhost:5147/api/tintingbanglore/post", formData)
//       .then(
//         toast("Data is being saved", {
//           position: "top-center",
//           autoClose: 50,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         })
//       );
//   };

//   const [FormInsert] = useForm();

//   return (
//     <>
//       <h1 className="text-center">Tinting Banco</h1>
//       <div className="container-fluid mt-5">
//         <Form
//           form={FormInsert}
//           className="FormMainClass"
//           onFinish={handleSubmit}
//           layout="vertical"
//         >
//           <Row gutter={[16, 24]}>
//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Date"
//                 name="Date"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a date",
//                   },
//                 ]}
//               >
//                 <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Name Of Project"
//                 name="NameOfTheProject"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a name",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Fandeck"
//                 name="Fandeck"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Fandeck",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Code"
//                 name="ShadeCode"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Code",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Name"
//                 name="ShadeName"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Name",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Product"
//                 name="Product"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Product",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Base"
//                 name="Base"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Base",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={20} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Base Batch Number"
//                 name="BaseBatchNo"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Base Batch Number",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={10} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Formulation for 1L"
//                 name="FormulationFor1LitrePackSize"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Formulation",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Quantity Tinted in Litres"
//                 name="QuantityTintedInLitres"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Quantity",
//                   },
//                 ]}
//               >
//                 <InputNumber style={{ width: "100%" }} min={0} max={100000} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Reference"
//                 name="Reference"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Reference",
//                   },
//                 ]}
//               >
//                 <Select style={{ width: "100%" }}>
//                   <Select.Option value="">Select</Select.Option>
//                   <Select.Option value="Standard">Standard</Select.Option>
//                   <Select.Option value="Customized">Customized</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Project/Retail"
//                 name="ForProjectOrRetail"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Project/Retail",
//                   },
//                 ]}
//               >
//                 <Select style={{ width: "100%" }}>
//                   <Select.Option value="">Select</Select.Option>
//                   <Select.Option value="Project">Project</Select.Option>
//                   <Select.Option value="Retail">Retail</Select.Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Match Confirmation"
//                 name="ShadeMatchConfirmation"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Match Confirmation",
//                   },
//                 ]}
//               >
//                 <Switch
//                   checkedChildren={<CheckOutlined />}
//                   unCheckedChildren={<CloseOutlined />}
//                 />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Shade Patch/Swatch"
//                 name="ShadePatch"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Shade Patch/Swatch",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Other Observations"
//                 name="OtherObservations"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide Other Observations",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>

//             <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
//               <Form.Item
//                 label="Dispensing Machine"
//                 name="DispensingMachine"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please provide a Dispensing Machine",
//                   },
//                 ]}
//               >
//                 <Input style={{ width: "100%" }} maxLength={40} />
//               </Form.Item>
//             </Col>
//           </Row>

//           <Row justify="end">
//             <Col className="gutter-box">
//               <Form.Item className="FormButtonClass">
//                 <Button type="primary" danger onClick={() => FormInsert.resetFields()}>
//                   Reset
//                 </Button>
//                 <Button type="primary" htmlType="submit" style={{ marginLeft: "10px" }}>
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Tinting;


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'antd/es/form/Form';
import { Col, Row, Button, Form, Input, DatePicker, InputNumber, Select, Switch, Collapse } from 'antd';
import axios from 'axios';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import ColourantBanco from './ColourantBanco';
// import './scc.css'

const Tinting = ({ username }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDummyButtonPressed, setIsDummyButtonPressed] = useState(false);
  const [isCollapseVisible, setIsCollapseVisible] = useState(false);
  const [collapseKey, setCollapseKey] = useState('1');

  const handleCollapse = () => {
    setCollapseKey(collapseKey === '1' ? '' : '1');
  };

  const handleSubmit = () => {
    let formData = FormInsert.getFieldValue();
    formData['CreateBy'] = username;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    formData['day'] = day;
    formData['month'] = month;
    formData['year'] = year;
    console.log(JSON.stringify(formData));
    axios
      .post('http://localhost:5147/api/tintingbanglore/post', formData)
      .then(() => {
        setIsSubmitted(true);
        toast('Data is being saved', {
          position: 'top-center',
          autoClose: 50,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  const [FormInsert] = useForm();

  return (
    <>
      <div className={`TintingContainer ${isSubmitted ? 'Submitted' : ''} ${isDummyButtonPressed ? 'GreenBorder' : ''}`}>
        <h1 className="text-center">Tinting Banco</h1>
        <Form form={FormInsert} className="FormMainClass" onFinish={handleSubmit} layout="vertical">
        <Row gutter={[16, 24]}>
            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
              <Form.Item
                label="Date"
                name="Date"
                rules={[
                  {
                    required: true,
                    message: "Please provide a date",
                  },
                ]}
              >
                <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Name Of Project"
               name="NameOfTheProject"
               rules={[
                 {
                   required: true,
                   message: "Please provide a name",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Fandeck"
               name="Fandeck"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Fandeck",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Code"
               name="ShadeCode"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Code",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Name"
               name="ShadeName"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Name",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Product"
               name="Product"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Product",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Base"
               name="Base"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Base",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={20} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Base Batch Number"
               name="BaseBatchNo"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Base Batch Number",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={10} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Formulation for 1L"
               name="FormulationFor1LitrePackSize"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Formulation",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Quantity Tinted in Litres"
               name="QuantityTintedInLitres"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Quantity",
                 },
               ]}
             >
               <InputNumber style={{ width: "100%" }} min={0} max={100000} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Reference"
               name="Reference"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Reference",
                 },
               ]}
             >
               <Select style={{ width: "100%" }}>
                 <Select.Option value="">Select</Select.Option>
                 <Select.Option value="Standard">Standard</Select.Option>
                 <Select.Option value="Customized">Customized</Select.Option>
               </Select>
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Project/Retail"
               name="ForProjectOrRetail"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Project/Retail",
                 },
               ]}
             >
               <Select style={{ width: "100%" }}>
                 <Select.Option value="">Select</Select.Option>
                 <Select.Option value="Project">Project</Select.Option>
                 <Select.Option value="Retail">Retail</Select.Option>
               </Select>
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Match Confirmation"
               name="ShadeMatchConfirmation"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Match Confirmation",
                 },
               ]}
             >
               <Switch
                 checkedChildren={<CheckOutlined />}
                 unCheckedChildren={<CloseOutlined />}
               />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Shade Patch/Swatch"
               name="ShadePatch"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Shade Patch/Swatch",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Other Observations"
               name="OtherObservations"
               rules={[
                 {
                   required: true,
                   message: "Please provide Other Observations",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>

           <Col className="gutter-box" xs={24} sm={12} md={8} lg={6} xl={6}>
             <Form.Item
               label="Dispensing Machine"
               name="DispensingMachine"
               rules={[
                 {
                   required: true,
                   message: "Please provide a Dispensing Machine",
                 },
               ]}
             >
               <Input style={{ width: "100%" }} maxLength={40} />
             </Form.Item>
           </Col>
          </Row>
        </Form>
      <Row justify="end">
        <Col className="gutter-box">
          <Form.Item className="FormButtonClass">
          <Button type="primary" danger onClick={() => FormInsert.resetFields()}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: '10px' }}>
              Submit
            </Button>
            <Button
              type="primary"
              onClick={() => setIsDummyButtonPressed(!isDummyButtonPressed)}
              style={{ marginLeft: '10px' }}
            >
              Dummy
            </Button>
          </Form.Item>
        </Col>
      </Row>
      </div>
      {isDummyButtonPressed || isCollapseVisible ? (
        <Collapse activeKey={collapseKey}>
          <Collapse.Panel header="Expand/Collapse" key="1" onClick={handleCollapse}>
            <ColourantBanco />
          </Collapse.Panel>
        </Collapse>
      ) : null}
      <ToastContainer />
    </>
  );
};

export default Tinting;
