<>
  <Form>
    <Card.Group>
      <Card fluid color="red" className="p1">
        <Form.TextArea
          label="Question"
          placeholder="Enter Question"
          name="q"
          onChange={handleInputChange}
        />
        <Form.Group widths="equal">
          <Form.Field>
            <Input
              label="Option A"
              placeholder="Enter Option A"
              fluid
              name="answer"
              onChange={handleChangeOptionA}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Option B"
              placeholder="Enter Option B"
              fluid
              name="answer"
              onChange={handleChangeOptionB}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <Input
              label="Option C"
              placeholder="Enter Option C"
              fluid
              name="answer"
              onChange={handleChangeOptionC}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label="Option D"
              placeholder="Enter Option D"
              fluid
              name="answer"
              onChange={handleChangeOptionD}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Input
            label="Correct Answer"
            placeholder="Enter Correct Answer"
            fluid
            name="correct_answer"
          />
        </Form.Field>
      </Card>
    </Card.Group>
    <Button
      primary
      size="small"
      icon="plus"
      labelPosition="right"
      content="Add"
      className="mt-2"
      onClick={handleAddData}
      // disabled={!allFieldsSelected || processing}
    />
  </Form>


  <Button
    secondary
    size="small"
    icon="plus"
    labelPosition="right"
    content="Set Option"
    className="mt-2"
    color="red"
    onClick={addOpt}
    // disabled={!allFieldsSelected || processing}
  />
  ;

  {opts.map((item,index) => (
    <Form.Field key={index}>
    <Input
    label={`Option ${item}`}
    placeholder={`Enter Option ${item}`}
    fluid
    name="answer"
    onChange={(e) => onOptChange(e, index)}
    />
    </Form.Field>
    ))}
</>;

function CreateQuestions() {
  const [questionId, setQuestionId] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [form, setForm] = useState([]);
  const [opt, setOpt] = useState([]);

  const opts = ["A", "B", "C", "D"];

  const handleAddData = (e) => {
    e.preventDefault();
    const inputState = {
      question: "",
      options: [],
    };
    setForm((prev) => [...prev, inputState]);
  };

  const addOpt = () => {
    const initialState = {
      letter: "",
      answer: "",
      isTrue: false,
    };

    setOpt((prev) => [...prev, initialState]);
    opt.filter((item) => item.letter !== "");
    console.log(opt.filter((item) => item.letter !== ""));
  };

  const handleRemove = (index, e) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };

  const onChange = (index, e) => {
    e.preventDefault();
    e.persist();

    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) return item;
        console.log(item);
        item.options.map((op, ind) => {
          console.log(`${op}: ${ind}`);
        });
        return {
          ...item,
          [e.target.name]: e.target.value,
          options: opt.filter((item) => item.letter !== ""),
        };
      });
    });
  };
  const onOptChange = (e, index) => {
    e.preventDefault();
    e.persist();
    let opt = e.target.placeholder.slice(-1);
    console.log(opt);

    let options = [
      { letter: "A", answer: "", isTrue: false },
      { letter: "B", answer: "", isTrue: false },
      { letter: "C", answer: "", isTrue: false },
      { letter: "D", answer: "", isTrue: false },
    ];

    // options.map((option) => {
    //   if (option.letter !== opt) return options;
    //   if (opt === option.letter) {
    //     [...options, option.answer = e.target.value];
    //   }
    //   console.log(options);
    // });

    // setForm((prev) => {
    //   return prev.map((item, i) => {
    //     if (i !== index) return item;
    //     item.options.map((op,ind) => {
    //       console.log(`${op}: ${ind}`)
    //     })
    //     return {
    //       ...item,
    //       [e.target.name]: e.target.value,
    //       options: opt.filter((item) => item.letter !== ""),
    //     };
    //   });
    // });

    // setOpt((prev) => {
    //   return prev.map((item, i) => {
    //     if (i !== index) return item;
    //     console.log(i);
    //     console.log(index);
    //     return {
    //       ...item,
    //       [e.target.name]: e.target.value,
    //       letter: e.target.placeholder.slice(-1),
    //     };
    //   });
    // });
  };

  return (
    <Container>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>
                <h1>Create Questions</h1>
              </Item.Header>
              <Form>
                {JSON.stringify(form)}
                {form.map((item, index) => (
                  <>
                    <Card.Group key={index}>
                      <Card fluid color="red" className="p1">
                        <Form.TextArea
                          label="Question"
                          placeholder="Enter Question"
                          name="question"
                          value={item.question}
                          onChange={(e) => onChange(index, e)}
                        />
                        <Form.Group widths="equal">
                          <Form.Field>
                            <Input
                              label="Option A"
                              placeholder="Enter Option A"
                              key={index}
                              fluid
                              name="answer"
                              onChange={(e) => onOptChange(e)}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Input
                              label="Option B"
                              placeholder="Enter Option B"
                              key={index}
                              fluid
                              name="answer"
                              onChange={(e) => onOptChange(e)}
                            />
                          </Form.Field>
                        </Form.Group>

                        <Form.Group widths="equal">
                          <Form.Field>
                            <Input
                              label="Option C"
                              placeholder="Enter Option C"
                              key={index}
                              fluid
                              name="answer"
                              onChange={(e) => onOptChange(e)}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Input
                              label="Option D"
                              placeholder="Enter Option D"
                              key={index}
                              fluid
                              name="answer"
                              onChange={(e) => onOptChange(e)}
                            />
                          </Form.Field>
                        </Form.Group>
                        <Form.Field>
                          <Input
                            label="Correct Answer"
                            placeholder="Enter Correct Answer"
                            fluid
                            name="correct_answer"
                          />
                        </Form.Field>
                      </Card>
                    </Card.Group>
                    <Button
                      // primary
                      size="small"
                      icon="minus"
                      labelPosition="right"
                      content="Remove"
                      className="mt-2"
                      color="red"
                      onClick={(e) => handleRemove(index, e)}
                    />
                    <Divider />
                  </>
                ))}
                <Button
                  primary
                  size="small"
                  icon="plus"
                  labelPosition="right"
                  content="Add"
                  className="mt-2"
                  onClick={handleAddData}
                />
              </Form>
              
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Container>
  );
}