import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useTranslation } from 'react-i18next'
import { useState } from 'react'


export default function ControlledAccordions() {
    const [lng, setLng] = useState("ru")
    const {t,i18n} = useTranslation()
    const changeLanguage = (language) =>{
      i18n.changeLanguage(language)
    }
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='dark:bg-[#151415d6] dark:text-[#fff]'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='dark:bg-[#4a474ad6] dark:text-[#fff]'
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}>
         {t("text13")}
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className='dark:bg-[#4a474ad6] dark:text-[#fff]'
        >
          <Typography className='' sx={{ width: '80%', flexShrink: 0 }}> {t("text13A")}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className='dark:bg-[#4a474ad6] dark:text-[#fff]'
        >
          <Typography  sx={{ width: '80%', flexShrink: 0 }}>
          {t("text13B")}
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className='dark:bg-[#4a474ad6] dark:text-[#fff]'
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}> {t("text13C")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className='dark:bg-[#4a474ad6] dark:text-[#fff]'
        >
          <Typography sx={{ width: '80%', flexShrink: 0 }}> {t("text13D")}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          В основе Elastic cloud используется виртуализация VMware Миграция на VMware возможна не только с других систем виртуализации (MS Hyper-V, XenServer), но и с «железных» серверов без виртуализации. Это более сложный и длительный процесс, чем миграция в рамках одной системы виртуализации. Но у #CloudМТS есть опыт проведения миграции клиентских систем c физических серверов без виртуализации и инфраструктуры Hyper-V.   .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}