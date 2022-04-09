/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateProduct: OnCreateProductSubscription;
  onUpdateProduct: OnUpdateProductSubscription;
  onDeleteProduct: OnDeleteProductSubscription;
};

export type CreateProductInput = {
  id?: string | null;
  name: string;
  store: string;
  count: number;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  store?: ModelStringInput | null;
  count?: ModelIntInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Product = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  store?: string | null;
  count?: number | null;
};

export type DeleteProductInput = {
  id: string;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  store?: ModelStringInput | null;
  count?: ModelIntInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    store: string;
    count: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  store: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            store
            count
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  OnCreateProductListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
  >;

  OnUpdateProductListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
  >;

  OnDeleteProductListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          store
          count
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
  >;
}
