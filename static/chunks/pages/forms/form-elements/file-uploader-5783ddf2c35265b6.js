(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3485],{89841:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/form-elements/file-uploader",function(){return i(82203)}])},39913:function(e,n,i){"use strict";i.d(n,{Z:function(){return F}});var t=i(85893),o=i(67294),r=i(61953),s=i(49837),l=i(72389),a=i(44373),c=i(93481),m=i(80562),p=i(59742),d=i(91359),g=i(87054),h=i(61225),u=i(85390),x=i(21609),f=i(15660),y=i.n(f),j=i(86501),v=i(66485),b=i.n(v);let k=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName),Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,o.useRef)(null),i=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&k(n.current)&&n.current.select()},t=()=>{e.onError&&e.onError();let i=!1!==e.selectOnError;i&&k(n.current)&&n.current.select()},r=e=>{b()(e).then(i).catch(t)},s=(0,o.useCallback)(e=>{"string"==typeof e?r(e):n.current&&r(n.current.value)},[]);return{copy:s,target:n}},w=e=>{let{id:n,sx:i,code:f,title:v,children:b,className:k}=e,[w,F]=(0,o.useState)(!1),[I,B]=(0,o.useState)(null!==f.tsx?"tsx":"jsx"),z=Z(),R=(0,h.Z)(e=>e.breakpoints.down("md"));(0,o.useEffect)(()=>{y().highlightAll()},[w,I]);let L=()=>null!==f.tsx&&"tsx"===I?f.tsx.props.children.props.children:null!==f.jsx&&"jsx"===I?f.jsx.props.children.props.children:"",T=()=>{z.copy(L()),j.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,t.jsxs)(s.Z,{className:k,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...i},id:n||"card-snippet--".concat(v.toLowerCase().replace(/ /g,"-")),children:[(0,t.jsx)(p.Z,{title:v,...R?{}:{action:(0,t.jsx)(m.Z,{onClick:()=>F(!w),children:(0,t.jsx)(x.Z,{icon:"mdi:code-tags",fontSize:20})})}}),(0,t.jsx)(d.Z,{children:b}),R?null:(0,t.jsxs)(c.Z,{in:w,children:[(0,t.jsx)(a.Z,{sx:{my:"0 !important"}}),(0,t.jsxs)(d.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,t.jsx)(r.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,t.jsxs)(u.Z,{exclusive:!0,size:"small",color:"primary",value:I,onChange:(e,n)=>null!==n?B(n):null,children:[null!==f.tsx?(0,t.jsx)(g.Z,{value:"tsx",children:(0,t.jsx)(x.Z,{icon:"mdi:language-typescript",fontSize:20})}):null,null!==f.jsx?(0,t.jsx)(g.Z,{value:"jsx",children:(0,t.jsx)(x.Z,{icon:"mdi:language-javascript",fontSize:20})}):null]})}),(0,t.jsx)(l.Z,{title:"Copy the source",placement:"top",children:(0,t.jsx)(m.Z,{onClick:T,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,t.jsx)(x.Z,{icon:"mdi:content-copy",fontSize:20})})}),(0,t.jsx)("div",{children:null!==f[I]?f[I]:null})]})]})]})};var F=w},10792:function(e,n,i){"use strict";var t=i(85893),o=i(79072);let r=e=>{let{title:n,subtitle:i}=e;return(0,t.jsxs)(o.ZP,{item:!0,xs:12,children:[n,i||null]})};n.Z=r},82203:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return N}});var t=i(85893),o=i(79072),r=i(1163),s=i(29630),l=i(10792),a=i(39913),c=i(67074),m=i(61953);let p=(0,c.ZP)(m.Z)(e=>{let{theme:n}=e;return{"&.dropzone, & .dropzone":{minHeight:300,display:"flex",flexWrap:"wrap",cursor:"pointer",position:"relative",alignItems:"center",justifyContent:"center",padding:n.spacing(4),borderRadius:n.shape.borderRadius,border:"2px dashed ".concat("light"===n.palette.mode?"rgba(93, 89, 98, 0.22)":"rgba(247, 244, 254, 0.14)"),[n.breakpoints.down("xs")]:{textAlign:"center"},"&:focus":{outline:"none"},"& + .MuiList-root":{padding:0,marginTop:n.spacing(6.25),"& .MuiListItem-root":{display:"flex",justifyContent:"space-between",borderRadius:n.shape.borderRadius,padding:n.spacing(2.5,2.4,2.5,6),border:"1px solid ".concat("light"===n.palette.mode?"rgba(93, 89, 98, 0.14)":"rgba(247, 244, 254, 0.14)"),"& .file-details":{display:"flex",alignItems:"center"},"& .file-preview":{display:"flex",marginRight:n.spacing(3.75),"& svg":{fontSize:"2rem"}},"& img":{width:38,height:38,padding:n.spacing(.75),borderRadius:n.shape.borderRadius,border:"1px solid ".concat("light"===n.palette.mode?"rgba(93, 89, 98, 0.14)":"rgba(247, 244, 254, 0.14)")},"& .file-name":{fontWeight:600},"& + .MuiListItem-root":{marginTop:n.spacing(3.5)}},"& + .buttons":{display:"flex",justifyContent:"flex-end",marginTop:n.spacing(6.25),"& > :first-of-type":{marginRight:n.spacing(3.5)}}},"& img.single-file-image":{objectFit:"cover",position:"absolute",width:"calc(100% - 1rem)",height:"calc(100% - 1rem)",borderRadius:n.shape.borderRadius}}}});var d=i(67294),g=i(32512);let h=(0,c.ZP)("img")(e=>{let{theme:n}=e;return{[n.breakpoints.up("md")]:{marginRight:n.spacing(10)},[n.breakpoints.down("md")]:{marginBottom:n.spacing(4)},[n.breakpoints.down("sm")]:{width:250}}}),u=(0,c.ZP)(s.Z)(e=>{let{theme:n}=e;return{marginBottom:n.spacing(5),[n.breakpoints.down("sm")]:{marginBottom:n.spacing(4)}}}),x=()=>{let[e,n]=(0,d.useState)([]),{getRootProps:i,getInputProps:o}=(0,g.uI)({multiple:!1,accept:{"image/*":[".png",".jpg",".jpeg",".gif"]},onDrop(e){n(e.map(e=>Object.assign(e)))}}),l=e=>{e.preventDefault()},a=e.map(e=>(0,t.jsx)("img",{alt:e.name,className:"single-file-image",src:URL.createObjectURL(e)},e.name));return(0,t.jsxs)(m.Z,{...i({className:"dropzone"}),sx:e.length?{height:450}:{},children:[(0,t.jsx)("input",{...o()}),e.length?a:(0,t.jsxs)(m.Z,{sx:{display:"flex",flexDirection:["column","column","row"],alignItems:"center"},children:[(0,t.jsx)(h,{width:300,alt:"Upload img",src:"/images/misc/upload.png"}),(0,t.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",textAlign:["center","center","inherit"]},children:[(0,t.jsx)(u,{variant:"h5",children:"Drop files here or click to upload."}),(0,t.jsxs)(s.Z,{color:"textSecondary",children:["Drop files here or click"," ",(0,t.jsx)(r.Z,{href:"/",onClick:l,children:"browse"})," ","thorough your machine"]})]})]})]})};var f=i(85214),y=i(54225),j=i(18746),v=i(80562),b=i(21609);let k=(0,c.ZP)("img")(e=>{let{theme:n}=e;return{[n.breakpoints.up("md")]:{marginRight:n.spacing(10)},[n.breakpoints.down("md")]:{marginBottom:n.spacing(4)},[n.breakpoints.down("sm")]:{width:250}}}),Z=(0,c.ZP)(s.Z)(e=>{let{theme:n}=e;return{marginBottom:n.spacing(5),[n.breakpoints.down("sm")]:{marginBottom:n.spacing(4)}}}),w=()=>{let[e,n]=(0,d.useState)([]),{getRootProps:i,getInputProps:o}=(0,g.uI)({onDrop(e){n(e.map(e=>Object.assign(e)))}}),l=e=>e.type.startsWith("image")?(0,t.jsx)("img",{width:38,height:38,alt:e.name,src:URL.createObjectURL(e)}):(0,t.jsx)(b.Z,{icon:"mdi:file-document-outline"}),a=i=>{let t=e.filter(e=>e.name!==i.name);n([...t])},c=e.map(e=>(0,t.jsxs)(j.ZP,{children:[(0,t.jsxs)("div",{className:"file-details",children:[(0,t.jsx)("div",{className:"file-preview",children:l(e)}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{className:"file-name",children:e.name}),(0,t.jsx)(s.Z,{className:"file-size",variant:"body2",children:Math.round(e.size/100)/10>1e3?"".concat((Math.round(e.size/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(e.size/100)/10).toFixed(1)," kb")})]})]}),(0,t.jsx)(v.Z,{onClick:()=>a(e),children:(0,t.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})]},e.name)),p=e=>{e.preventDefault()},h=()=>{n([])};return(0,t.jsxs)(d.Fragment,{children:[(0,t.jsxs)("div",{...i({className:"dropzone"}),children:[(0,t.jsx)("input",{...o()}),(0,t.jsxs)(m.Z,{sx:{display:"flex",flexDirection:["column","column","row"],alignItems:"center"},children:[(0,t.jsx)(k,{width:300,alt:"Upload img",src:"/images/misc/upload.png"}),(0,t.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",textAlign:["center","center","inherit"]},children:[(0,t.jsx)(Z,{variant:"h5",children:"Drop files here or click to upload."}),(0,t.jsxs)(s.Z,{color:"textSecondary",children:["Drop files here or click"," ",(0,t.jsx)(r.Z,{href:"/",onClick:p,children:"browse"})," ","thorough your machine"]})]})]})]}),e.length?(0,t.jsxs)(d.Fragment,{children:[(0,t.jsx)(f.Z,{children:c}),(0,t.jsxs)("div",{className:"buttons",children:[(0,t.jsx)(y.Z,{color:"error",variant:"outlined",onClick:h,children:"Remove All"}),(0,t.jsx)(y.Z,{variant:"contained",children:"Upload Files"})]})]}):null]})};var F=i(86501);let I=(0,c.ZP)("img")(e=>{let{theme:n}=e;return{[n.breakpoints.up("md")]:{marginRight:n.spacing(10)},[n.breakpoints.down("md")]:{marginBottom:n.spacing(4)},[n.breakpoints.down("sm")]:{width:250}}}),B=(0,c.ZP)(s.Z)(e=>{let{theme:n}=e;return{marginBottom:n.spacing(5),[n.breakpoints.down("sm")]:{marginBottom:n.spacing(4)}}}),z=()=>{let[e,n]=(0,d.useState)([]),{getRootProps:i,getInputProps:o}=(0,g.uI)({maxFiles:2,maxSize:2e6,accept:{"image/*":[".png",".jpg",".jpeg",".gif"]},onDrop(e){n(e.map(e=>Object.assign(e)))},onDropRejected(){F.ZP.error("You can only upload 2 files & maximum size of 2 MB.",{duration:2e3})}}),r=e=>e.type.startsWith("image")?(0,t.jsx)("img",{width:38,height:38,alt:e.name,src:URL.createObjectURL(e)}):(0,t.jsx)(b.Z,{icon:"mdi:file-document-outline"}),l=i=>{let t=e.filter(e=>e.name!==i.name);n([...t])},a=e.map(e=>(0,t.jsxs)(j.ZP,{children:[(0,t.jsxs)("div",{className:"file-details",children:[(0,t.jsx)("div",{className:"file-preview",children:r(e)}),(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{className:"file-name",children:e.name}),(0,t.jsx)(s.Z,{className:"file-size",variant:"body2",children:Math.round(e.size/100)/10>1e3?"".concat((Math.round(e.size/100)/1e4).toFixed(1)," mb"):"".concat((Math.round(e.size/100)/10).toFixed(1)," kb")})]})]}),(0,t.jsx)(v.Z,{onClick:()=>l(e),children:(0,t.jsx)(b.Z,{icon:"mdi:close",fontSize:20})})]},e.name)),c=()=>{n([])};return(0,t.jsxs)(d.Fragment,{children:[(0,t.jsxs)("div",{...i({className:"dropzone"}),children:[(0,t.jsx)("input",{...o()}),(0,t.jsxs)(m.Z,{sx:{display:"flex",flexDirection:["column","column","row"],alignItems:"center"},children:[(0,t.jsx)(I,{width:300,alt:"Upload img",src:"/images/misc/upload.png"}),(0,t.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",textAlign:["center","center","inherit"]},children:[(0,t.jsx)(B,{variant:"h5",children:"Drop files here or click to upload."}),(0,t.jsx)(s.Z,{color:"textSecondary",children:"Allowed *.jpeg, *.jpg, *.png, *.gif"}),(0,t.jsx)(s.Z,{color:"textSecondary",children:"Max 2 files and max size of 2 MB"})]})]})]}),e.length?(0,t.jsxs)(d.Fragment,{children:[(0,t.jsx)(f.Z,{children:a}),(0,t.jsxs)("div",{className:"buttons",children:[(0,t.jsx)(y.Z,{color:"error",variant:"outlined",onClick:c,children:"Remove All"}),(0,t.jsx)(y.Z,{variant:"contained",children:"Upload Files"})]})]}):null]})},R=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Link from '@mui/material/Link'\nimport List from '@mui/material/List'\nimport Button from '@mui/material/Button'\nimport ListItem from '@mui/material/ListItem'\nimport { styled } from '@mui/material/styles'\nimport IconButton from '@mui/material/IconButton'\nimport Typography from '@mui/material/Typography'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// ** Third Party Imports\nimport { useDropzone } from 'react-dropzone'\n\n// Styled component for the upload image inside the dropzone area\nconst Img = styled('img')(({ theme }) => ({\n  [theme.breakpoints.up('md')]: {\n    marginRight: theme.spacing(10)\n  },\n  [theme.breakpoints.down('md')]: {\n    marginBottom: theme.spacing(4)\n  },\n  [theme.breakpoints.down('sm')]: {\n    width: 250\n  }\n}))\n\n// Styled component for the heading inside the dropzone area\nconst HeadingTypography = styled(Typography)(({ theme }) => ({\n  marginBottom: theme.spacing(5),\n  [theme.breakpoints.down('sm')]: {\n    marginBottom: theme.spacing(4)\n  }\n}))\n\nconst FileUploaderMultiple = () => {\n  // ** State\n  const [files, setFiles] = useState([])\n\n  // ** Hooks\n  const { getRootProps, getInputProps } = useDropzone({\n    onDrop: acceptedFiles => {\n      setFiles(acceptedFiles.map(file => Object.assign(file)))\n    }\n  })\n\n  const renderFilePreview = file => {\n    if (file.type.startsWith('image')) {\n      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />\n    } else {\n      return <Icon icon='mdi:file-document-outline' />\n    }\n  }\n\n  const handleRemoveFile = file => {\n    const uploadedFiles = files\n    const filtered = uploadedFiles.filter(i => i.name !== file.name)\n    setFiles([...filtered])\n  }\n\n  const fileList = files.map(file => (\n    <ListItem key={file.name}>\n      <div className='file-details'>\n        <div className='file-preview'>{renderFilePreview(file)}</div>\n        <div>\n          <Typography className='file-name'>{file.name}</Typography>\n          <Typography className='file-size' variant='body2'>\n            {Math.round(file.size / 100) / 10 > 1000\n              ? {(Math.round(file.size / 100) / 10000).toFixed(1)} mb\n              : {(Math.round(file.size / 100) / 10).toFixed(1)} kb}\n          </Typography>\n        </div>\n      </div>\n      <IconButton onClick={() => handleRemoveFile(file)}>\n        <Icon icon='mdi:close' fontSize={20} />\n      </IconButton>\n    </ListItem>\n  ))\n\n  const handleLinkClick = event => {\n    event.preventDefault()\n  }\n\n  const handleRemoveAllFiles = () => {\n    setFiles([])\n  }\n\n  return (\n    <Fragment>\n      <div {...getRootProps({ className: 'dropzone' })}>\n        <input {...getInputProps()} />\n        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>\n          <Img width={300} alt='Upload img' src='/images/misc/upload.png' />\n          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>\n            <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>\n            <Typography color='textSecondary'>\n              Drop files here or click{' '}\n              <Link href='/' onClick={handleLinkClick}>\n                browse\n              </Link>{' '}\n              thorough your machine\n            </Typography>\n          </Box>\n        </Box>\n      </div>\n      {files.length ? (\n        <Fragment>\n          <List>{fileList}</List>\n          <div className='buttons'>\n            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>\n              Remove All\n            </Button>\n            <Button variant='contained'>Upload Files</Button>\n          </div>\n        </Fragment>\n      ) : null}\n    </Fragment>\n  )\n}\n\nexport default FileUploaderMultiple\n"})}),L=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Link from '@mui/material/Link'\nimport { styled } from '@mui/material/styles'\nimport Typography from '@mui/material/Typography'\n\n// ** Third Party Imports\nimport { useDropzone } from 'react-dropzone'\n\n// Styled component for the upload image inside the dropzone area\nconst Img = styled('img')(({ theme }) => ({\n  [theme.breakpoints.up('md')]: {\n    marginRight: theme.spacing(10)\n  },\n  [theme.breakpoints.down('md')]: {\n    marginBottom: theme.spacing(4)\n  },\n  [theme.breakpoints.down('sm')]: {\n    width: 250\n  }\n}))\n\n// Styled component for the heading inside the dropzone area\nconst HeadingTypography = styled(Typography)(({ theme }) => ({\n  marginBottom: theme.spacing(5),\n  [theme.breakpoints.down('sm')]: {\n    marginBottom: theme.spacing(4)\n  }\n}))\n\nconst FileUploaderSingle = () => {\n  // ** State\n  const [files, setFiles] = useState([])\n\n  // ** Hook\n  const { getRootProps, getInputProps } = useDropzone({\n    multiple: false,\n    accept: {\n      'image/*': ['.png', '.jpg', '.jpeg', '.gif']\n    },\n    onDrop: acceptedFiles => {\n      setFiles(acceptedFiles.map(file => Object.assign(file)))\n    }\n  })\n\n  const handleLinkClick = event => {\n    event.preventDefault()\n  }\n\n  const img = files.map(file => (\n    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file)} />\n  ))\n\n  return (\n    <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>\n      <input {...getInputProps()} />\n      {files.length ? (\n        img\n      ) : (\n        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>\n          <Img width={300} alt='Upload img' src='/images/misc/upload.png' />\n          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>\n            <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>\n            <Typography color='textSecondary'>\n              Drop files here or click{' '}\n              <Link href='/' onClick={handleLinkClick}>\n                browse\n              </Link>{' '}\n              thorough your machine\n            </Typography>\n          </Box>\n        </Box>\n      )}\n    </Box>\n  )\n}\n\nexport default FileUploaderSingle\n"})}),T=(0,t.jsx)("pre",{className:"language-jsx",children:(0,t.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport List from '@mui/material/List'\nimport Button from '@mui/material/Button'\nimport ListItem from '@mui/material/ListItem'\nimport { styled } from '@mui/material/styles'\nimport IconButton from '@mui/material/IconButton'\nimport Typography from '@mui/material/Typography'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\n// ** Third Party Components\nimport toast from 'react-hot-toast'\nimport { useDropzone } from 'react-dropzone'\n\n// Styled component for the upload image inside the dropzone area\nconst Img = styled('img')(({ theme }) => ({\n  [theme.breakpoints.up('md')]: {\n    marginRight: theme.spacing(10)\n  },\n  [theme.breakpoints.down('md')]: {\n    marginBottom: theme.spacing(4)\n  },\n  [theme.breakpoints.down('sm')]: {\n    width: 250\n  }\n}))\n\n// Styled component for the heading inside the dropzone area\nconst HeadingTypography = styled(Typography)(({ theme }) => ({\n  marginBottom: theme.spacing(5),\n  [theme.breakpoints.down('sm')]: {\n    marginBottom: theme.spacing(4)\n  }\n}))\n\nconst FileUploaderRestrictions = () => {\n  // ** State\n  const [files, setFiles] = useState([])\n\n  // ** Hooks\n  const { getRootProps, getInputProps } = useDropzone({\n    maxFiles: 2,\n    maxSize: 2000000,\n    accept: {\n      'image/*': ['.png', '.jpg', '.jpeg', '.gif']\n    },\n    onDrop: acceptedFiles => {\n      setFiles(acceptedFiles.map(file => Object.assign(file)))\n    },\n    onDropRejected: () => {\n      toast.error('You can only upload 2 files & maximum size of 2 MB.', {\n        duration: 2000\n      })\n    }\n  })\n\n  const renderFilePreview = file => {\n    if (file.type.startsWith('image')) {\n      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />\n    } else {\n      return <Icon icon='mdi:file-document-outline' />\n    }\n  }\n\n  const handleRemoveFile = file => {\n    const uploadedFiles = files\n    const filtered = uploadedFiles.filter(i => i.name !== file.name)\n    setFiles([...filtered])\n  }\n\n  const fileList = files.map(file => (\n    <ListItem key={file.name}>\n      <div className='file-details'>\n        <div className='file-preview'>{renderFilePreview(file)}</div>\n        <div>\n          <Typography className='file-name'>{file.name}</Typography>\n          <Typography className='file-size' variant='body2'>\n            {Math.round(file.size / 100) / 10 > 1000\n              ? {(Math.round(file.size / 100) / 10000).toFixed(1)} mb\n              : {(Math.round(file.size / 100) / 10).toFixed(1)} kb}\n          </Typography>\n        </div>\n      </div>\n      <IconButton onClick={() => handleRemoveFile(file)}>\n        <Icon icon='mdi:close' fontSize={20} />\n      </IconButton>\n    </ListItem>\n  ))\n\n  const handleRemoveAllFiles = () => {\n    setFiles([])\n  }\n\n  return (\n    <Fragment>\n      <div {...getRootProps({ className: 'dropzone' })}>\n        <input {...getInputProps()} />\n        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>\n          <Img width={300} alt='Upload img' src='/images/misc/upload.png' />\n          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>\n            <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>\n            <Typography color='textSecondary'>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>\n            <Typography color='textSecondary'>Max 2 files and max size of 2 MB</Typography>\n          </Box>\n        </Box>\n      </div>\n      {files.length ? (\n        <Fragment>\n          <List>{fileList}</List>\n          <div className='buttons'>\n            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>\n              Remove All\n            </Button>\n            <Button variant='contained'>Upload Files</Button>\n          </div>\n        </Fragment>\n      ) : null}\n    </Fragment>\n  )\n}\n\nexport default FileUploaderRestrictions\n"})}),S=()=>(0,t.jsx)(p,{children:(0,t.jsxs)(o.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,t.jsx)(l.Z,{title:(0,t.jsx)(s.Z,{variant:"h5",children:(0,t.jsx)(r.Z,{href:"https://github.com/react-dropzone/react-dropzone/",target:"_blank",children:"React Dropzone"})}),subtitle:(0,t.jsx)(s.Z,{variant:"body2",children:"Simple HTML5 drag-drop zone with React.js"})}),(0,t.jsx)(o.ZP,{item:!0,xs:12,children:(0,t.jsx)(a.Z,{title:"Upload Multiple Files",code:{tsx:null,jsx:R},children:(0,t.jsx)(w,{})})}),(0,t.jsx)(o.ZP,{item:!0,xs:12,children:(0,t.jsx)(a.Z,{title:"Upload Single Files",code:{tsx:null,jsx:L},children:(0,t.jsx)(x,{})})}),(0,t.jsx)(o.ZP,{item:!0,xs:12,children:(0,t.jsx)(a.Z,{title:"Upload Files with Restrictions",code:{tsx:null,jsx:T},children:(0,t.jsx)(z,{})})})]})});var N=S}},function(e){e.O(0,[5307,2588,9774,2888,179],function(){return e(e.s=89841)}),_N_E=e.O()}]);