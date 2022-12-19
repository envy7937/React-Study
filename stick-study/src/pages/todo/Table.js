import {Button, Col, Input, Label, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row} from 'reactstrap'
import React from 'react'
import classnames from 'classnames'
import {XCircle} from 'react-feather'

const TodoListTable = () => {
  return (
    <>
      <Row>
        <Col lg={8}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({active: true})}
                onClick={null}>All</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={null}
                onClick={null}>Active</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={null}
                onClick={null}>Completed</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col lg={4} className={'d-flex justify-content-end'}>
          <Button type={'button'} size={'sm'}>전체 삭제</Button>
        </Col>
      </Row>

      <ListGroup>
        <ListGroupItem className="d-flex justify-content-between">
          <span>
            <Label>
              <Input type={'checkbox'}/>
              test
            </Label>
            <span className={'d-inline-block'}>2022-12-19 00:00:00</span>
          </span>
          <XCircle size={24} />
        </ListGroupItem>
      </ListGroup>
    </>
  )
}

export default TodoListTable