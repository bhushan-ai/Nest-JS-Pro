/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller("employee")
export class EmployeeController {
    @Get()
      getEmployee() {
        return 'Employee details fetched successfully!!';
      }
}
