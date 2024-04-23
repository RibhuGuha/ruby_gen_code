import * as React from "react";
import { Box } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import RenderFormContols from "components/formControls/RenderFormContols";

const Component = (props) => {

    const { onInputChange, onSubmit, shadow } = props;
    const form = React.useRef(null);

    const boxShadow = shadow ? "0 1px 5px rgba(0,0,0,.15) !important" : null;
    const borderRadius = shadow ? "3px !important" : null;

    const handleSubmit = () => {
        if (onSubmit) onSubmit();
    }

    const OnInputChange = (e) => {
        if (onInputChange) onInputChange(e);
    }

    React.useEffect(() => {
        if (props.setForm) props.setForm(form);
    }, [props, form]);

    React.useEffect(() => {
        ValidatorForm.addValidationRule('isTruthy', value => value);
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <ValidatorForm ref={form} onSubmit={handleSubmit}>
                <Box style={{ display: 'block', width: '100%', marginBottom: 5 }}>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="producttypeptype" mode={props.mode} title={"Product Type"}
                            controls={props.controls.producttypeptype} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="productpricebuyingprice" mode={props.mode} title={"Product Price details will go here"}
                            controls={props.controls.productpricebuyingprice} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="otherdetailsodetails" mode={props.mode} title={"Product Other Details Component"}
                            controls={props.controls.otherdetailsodetails} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                    <Box sx={{ float: "left", minWidth: "45%", margin: 2, boxShadow, borderRadius }}>
                        <RenderFormContols shadow={true} location="product" mode={props.mode} title={"Product Parent"}
                            controls={props.controls.product} options={props.options} onInputChange={OnInputChange} />
                    </Box>
                </Box>
            </ValidatorForm>
        </Box>
    );

}

export default Component;