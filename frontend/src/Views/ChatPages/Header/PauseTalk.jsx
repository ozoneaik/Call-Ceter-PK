import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import Button from "@mui/joy/Button";
import Tooltip from '@mui/joy/Tooltip';
import React, {useState} from "react";
import Modal from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import {Alert, ModalClose} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import {pauseTalkApi} from "../../../Api/Messages.js";
import {AlertDiaLog} from "../../../Dialogs/Alert.js";


export const PauseTalk = () => {
    const [open, setOpen] = useState(false);

    const pauseTalkHandler = async () => {
        const {data, status} = await pauseTalkApi(48);
        console.log(data,status);
        AlertDiaLog({
            icon: status === 200 ? 'success' : 'error',
            title: data.message,
            text: data.detail,
            onPassed: (confirm) => {
                console.log(confirm);
            }
        })
        setOpen(false);
    }

    return (
        <>

            <Tooltip title="หากต้องการคุยลูกค้าในครั้งถัดไป" color='primary' variant="solid" size='lg'>
                <Button
                    onClick={() => setOpen(true)}
                    variant="outlined" size="sm"
                    color='neutral'
                >
                    <PauseCircleIcon/>
                    พักการสนทนาชั่วคราว
                </Button>
            </Tooltip>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}

            >
                <Sheet
                    variant="outlined"
                    sx={{maxWidth: 700, borderRadius: 'md', p: 3, boxShadow: 'lg'}}
                >
                    <ModalClose variant="plain" sx={{m: 1}}/>
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{fontWeight: 'lg', mb: 1}}
                    >
                        พักการสนทนาชั่วคราว
                    </Typography>
                    <Alert color='primary' size='lg'>
                        ระบบจะแก้ไขสถานะเคสนี้เป็น 'รอรับเรื่อง' และจัดให้เป็นคิวท้ายสุด
                        <br/>เพื่อให้คุณสามารถกลับมาจัดการได้ในวันถัดไปหรือภายหลัง
                    </Alert>
                    <Stack spacing={2} mt={2}>
                        <Button onClick={()=>pauseTalkHandler()}>ตกลง</Button>
                    </Stack>
                </Sheet>
            </Modal>
        </>
    )
}