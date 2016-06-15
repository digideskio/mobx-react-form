
//get(data, path);
map(schema, (tid, tab) => {
    map(tab, (cid, control) => {
        <Control config={control} path={`${tid}.${cid}`} />
    });
});

// simple
visible = some(config.depends
<Text value={get(data, path)} onChange={e => store.form.set(path, e.target.value)} />

groups.map((group, gid) => {
    return map(group, (control, cid) => {
        return <Control config={config.schema[cid]} path={${path}.${gid}.${cid}}/>    
    });
});

// repeater
