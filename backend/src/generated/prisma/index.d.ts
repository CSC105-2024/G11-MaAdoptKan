
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Vaccine
 * 
 */
export type Vaccine = $Result.DefaultSelection<Prisma.$VaccinePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RequestForm
 * 
 */
export type RequestForm = $Result.DefaultSelection<Prisma.$RequestFormPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Type: {
  cat: 'cat',
  dog: 'dog'
};

export type Type = (typeof Type)[keyof typeof Type]


export const HouseEn: {
  house: 'house',
  condo: 'condo'
};

export type HouseEn = (typeof HouseEn)[keyof typeof HouseEn]


export const Financial: {
  belowTenThousand: 'belowTenThousand',
  tenThousand: 'tenThousand',
  twentyThousand: 'twentyThousand',
  thirtyThousand: 'thirtyThousand',
  fourThousand: 'fourThousand',
  aboveFiveThousand: 'aboveFiveThousand'
};

export type Financial = (typeof Financial)[keyof typeof Financial]


export const Pickup: {
  selfPickup: 'selfPickup',
  delivery: 'delivery'
};

export type Pickup = (typeof Pickup)[keyof typeof Pickup]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type HouseEn = $Enums.HouseEn

export const HouseEn: typeof $Enums.HouseEn

export type Financial = $Enums.Financial

export const Financial: typeof $Enums.Financial

export type Pickup = $Enums.Pickup

export const Pickup: typeof $Enums.Pickup

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pets
 * const pets = await prisma.pet.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pets
   * const pets = await prisma.pet.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vaccine`: Exposes CRUD operations for the **Vaccine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vaccines
    * const vaccines = await prisma.vaccine.findMany()
    * ```
    */
  get vaccine(): Prisma.VaccineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requestForm`: Exposes CRUD operations for the **RequestForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequestForms
    * const requestForms = await prisma.requestForm.findMany()
    * ```
    */
  get requestForm(): Prisma.RequestFormDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pet: 'Pet',
    Vaccine: 'Vaccine',
    User: 'User',
    RequestForm: 'RequestForm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pet" | "vaccine" | "user" | "requestForm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Vaccine: {
        payload: Prisma.$VaccinePayload<ExtArgs>
        fields: Prisma.VaccineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaccineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaccineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          findFirst: {
            args: Prisma.VaccineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaccineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          findMany: {
            args: Prisma.VaccineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          create: {
            args: Prisma.VaccineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          createMany: {
            args: Prisma.VaccineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaccineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          delete: {
            args: Prisma.VaccineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          update: {
            args: Prisma.VaccineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          deleteMany: {
            args: Prisma.VaccineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaccineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VaccineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          upsert: {
            args: Prisma.VaccineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          aggregate: {
            args: Prisma.VaccineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaccine>
          }
          groupBy: {
            args: Prisma.VaccineGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaccineGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaccineCountArgs<ExtArgs>
            result: $Utils.Optional<VaccineCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RequestForm: {
        payload: Prisma.$RequestFormPayload<ExtArgs>
        fields: Prisma.RequestFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>
          }
          findFirst: {
            args: Prisma.RequestFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>
          }
          findMany: {
            args: Prisma.RequestFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>[]
          }
          create: {
            args: Prisma.RequestFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>
          }
          createMany: {
            args: Prisma.RequestFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>[]
          }
          delete: {
            args: Prisma.RequestFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>
          }
          update: {
            args: Prisma.RequestFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>
          }
          deleteMany: {
            args: Prisma.RequestFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>[]
          }
          upsert: {
            args: Prisma.RequestFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestFormPayload>
          }
          aggregate: {
            args: Prisma.RequestFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequestForm>
          }
          groupBy: {
            args: Prisma.RequestFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestFormCountArgs<ExtArgs>
            result: $Utils.Optional<RequestFormCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pet?: PetOmit
    vaccine?: VaccineOmit
    user?: UserOmit
    requestForm?: RequestFormOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    Vaccine: number
    RequestForm: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vaccine?: boolean | PetCountOutputTypeCountVaccineArgs
    RequestForm?: boolean | PetCountOutputTypeCountRequestFormArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountVaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountRequestFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFormWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Pet: number
    RequestForm: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | UserCountOutputTypeCountPetArgs
    RequestForm?: boolean | UserCountOutputTypeCountRequestFormArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFormWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    ageYear: number | null
    ageMonth: number | null
    userId: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    ageYear: number | null
    ageMonth: number | null
    userId: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.Type | null
    gender: $Enums.Gender | null
    pictureUrl: string | null
    color: string | null
    dateOfBirth: Date | null
    ageYear: number | null
    ageMonth: number | null
    breed: string | null
    phoneNumber: string | null
    address: string | null
    vacineUrl: string | null
    userId: number | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.Type | null
    gender: $Enums.Gender | null
    pictureUrl: string | null
    color: string | null
    dateOfBirth: Date | null
    ageYear: number | null
    ageMonth: number | null
    breed: string | null
    phoneNumber: string | null
    address: string | null
    vacineUrl: string | null
    userId: number | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    type: number
    gender: number
    pictureUrl: number
    color: number
    dateOfBirth: number
    ageYear: number
    ageMonth: number
    breed: number
    phoneNumber: number
    address: number
    vacineUrl: number
    userId: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    ageYear?: true
    ageMonth?: true
    userId?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    ageYear?: true
    ageMonth?: true
    userId?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    gender?: true
    pictureUrl?: true
    color?: true
    dateOfBirth?: true
    ageYear?: true
    ageMonth?: true
    breed?: true
    phoneNumber?: true
    address?: true
    vacineUrl?: true
    userId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    gender?: true
    pictureUrl?: true
    color?: true
    dateOfBirth?: true
    ageYear?: true
    ageMonth?: true
    breed?: true
    phoneNumber?: true
    address?: true
    vacineUrl?: true
    userId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    gender?: true
    pictureUrl?: true
    color?: true
    dateOfBirth?: true
    ageYear?: true
    ageMonth?: true
    breed?: true
    phoneNumber?: true
    address?: true
    vacineUrl?: true
    userId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color: string | null
    dateOfBirth: Date | null
    ageYear: number | null
    ageMonth: number | null
    breed: string | null
    phoneNumber: string
    address: string
    vacineUrl: string | null
    userId: number
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    gender?: boolean
    pictureUrl?: boolean
    color?: boolean
    dateOfBirth?: boolean
    ageYear?: boolean
    ageMonth?: boolean
    breed?: boolean
    phoneNumber?: boolean
    address?: boolean
    vacineUrl?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Vaccine?: boolean | Pet$VaccineArgs<ExtArgs>
    RequestForm?: boolean | Pet$RequestFormArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    gender?: boolean
    pictureUrl?: boolean
    color?: boolean
    dateOfBirth?: boolean
    ageYear?: boolean
    ageMonth?: boolean
    breed?: boolean
    phoneNumber?: boolean
    address?: boolean
    vacineUrl?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    gender?: boolean
    pictureUrl?: boolean
    color?: boolean
    dateOfBirth?: boolean
    ageYear?: boolean
    ageMonth?: boolean
    breed?: boolean
    phoneNumber?: boolean
    address?: boolean
    vacineUrl?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    gender?: boolean
    pictureUrl?: boolean
    color?: boolean
    dateOfBirth?: boolean
    ageYear?: boolean
    ageMonth?: boolean
    breed?: boolean
    phoneNumber?: boolean
    address?: boolean
    vacineUrl?: boolean
    userId?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "gender" | "pictureUrl" | "color" | "dateOfBirth" | "ageYear" | "ageMonth" | "breed" | "phoneNumber" | "address" | "vacineUrl" | "userId", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Vaccine?: boolean | Pet$VaccineArgs<ExtArgs>
    RequestForm?: boolean | Pet$RequestFormArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Vaccine: Prisma.$VaccinePayload<ExtArgs>[]
      RequestForm: Prisma.$RequestFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.Type
      gender: $Enums.Gender
      pictureUrl: string
      color: string | null
      dateOfBirth: Date | null
      ageYear: number | null
      ageMonth: number | null
      breed: string | null
      phoneNumber: string
      address: string
      vacineUrl: string | null
      userId: number
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Vaccine<T extends Pet$VaccineArgs<ExtArgs> = {}>(args?: Subset<T, Pet$VaccineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RequestForm<T extends Pet$RequestFormArgs<ExtArgs> = {}>(args?: Subset<T, Pet$RequestFormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly type: FieldRef<"Pet", 'Type'>
    readonly gender: FieldRef<"Pet", 'Gender'>
    readonly pictureUrl: FieldRef<"Pet", 'String'>
    readonly color: FieldRef<"Pet", 'String'>
    readonly dateOfBirth: FieldRef<"Pet", 'DateTime'>
    readonly ageYear: FieldRef<"Pet", 'Int'>
    readonly ageMonth: FieldRef<"Pet", 'Int'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly phoneNumber: FieldRef<"Pet", 'String'>
    readonly address: FieldRef<"Pet", 'String'>
    readonly vacineUrl: FieldRef<"Pet", 'String'>
    readonly userId: FieldRef<"Pet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.Vaccine
   */
  export type Pet$VaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    cursor?: VaccineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Pet.RequestForm
   */
  export type Pet$RequestFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    where?: RequestFormWhereInput
    orderBy?: RequestFormOrderByWithRelationInput | RequestFormOrderByWithRelationInput[]
    cursor?: RequestFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestFormScalarFieldEnum | RequestFormScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Vaccine
   */

  export type AggregateVaccine = {
    _count: VaccineCountAggregateOutputType | null
    _avg: VaccineAvgAggregateOutputType | null
    _sum: VaccineSumAggregateOutputType | null
    _min: VaccineMinAggregateOutputType | null
    _max: VaccineMaxAggregateOutputType | null
  }

  export type VaccineAvgAggregateOutputType = {
    id: number | null
    petId: number | null
  }

  export type VaccineSumAggregateOutputType = {
    id: number | null
    petId: number | null
  }

  export type VaccineMinAggregateOutputType = {
    id: number | null
    vaccine: string | null
    petId: number | null
  }

  export type VaccineMaxAggregateOutputType = {
    id: number | null
    vaccine: string | null
    petId: number | null
  }

  export type VaccineCountAggregateOutputType = {
    id: number
    vaccine: number
    petId: number
    _all: number
  }


  export type VaccineAvgAggregateInputType = {
    id?: true
    petId?: true
  }

  export type VaccineSumAggregateInputType = {
    id?: true
    petId?: true
  }

  export type VaccineMinAggregateInputType = {
    id?: true
    vaccine?: true
    petId?: true
  }

  export type VaccineMaxAggregateInputType = {
    id?: true
    vaccine?: true
    petId?: true
  }

  export type VaccineCountAggregateInputType = {
    id?: true
    vaccine?: true
    petId?: true
    _all?: true
  }

  export type VaccineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccine to aggregate.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vaccines
    **/
    _count?: true | VaccineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaccineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaccineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaccineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaccineMaxAggregateInputType
  }

  export type GetVaccineAggregateType<T extends VaccineAggregateArgs> = {
        [P in keyof T & keyof AggregateVaccine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaccine[P]>
      : GetScalarType<T[P], AggregateVaccine[P]>
  }




  export type VaccineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithAggregationInput | VaccineOrderByWithAggregationInput[]
    by: VaccineScalarFieldEnum[] | VaccineScalarFieldEnum
    having?: VaccineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaccineCountAggregateInputType | true
    _avg?: VaccineAvgAggregateInputType
    _sum?: VaccineSumAggregateInputType
    _min?: VaccineMinAggregateInputType
    _max?: VaccineMaxAggregateInputType
  }

  export type VaccineGroupByOutputType = {
    id: number
    vaccine: string | null
    petId: number
    _count: VaccineCountAggregateOutputType | null
    _avg: VaccineAvgAggregateOutputType | null
    _sum: VaccineSumAggregateOutputType | null
    _min: VaccineMinAggregateOutputType | null
    _max: VaccineMaxAggregateOutputType | null
  }

  type GetVaccineGroupByPayload<T extends VaccineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaccineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaccineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaccineGroupByOutputType[P]>
            : GetScalarType<T[P], VaccineGroupByOutputType[P]>
        }
      >
    >


  export type VaccineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vaccine?: boolean
    petId?: boolean
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vaccine?: boolean
    petId?: boolean
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vaccine?: boolean
    petId?: boolean
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectScalar = {
    id?: boolean
    vaccine?: boolean
    petId?: boolean
  }

  export type VaccineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vaccine" | "petId", ExtArgs["result"]["vaccine"]>
  export type VaccineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type VaccineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type VaccineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $VaccinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaccine"
    objects: {
      Pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vaccine: string | null
      petId: number
    }, ExtArgs["result"]["vaccine"]>
    composites: {}
  }

  type VaccineGetPayload<S extends boolean | null | undefined | VaccineDefaultArgs> = $Result.GetResult<Prisma.$VaccinePayload, S>

  type VaccineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VaccineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VaccineCountAggregateInputType | true
    }

  export interface VaccineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaccine'], meta: { name: 'Vaccine' } }
    /**
     * Find zero or one Vaccine that matches the filter.
     * @param {VaccineFindUniqueArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaccineFindUniqueArgs>(args: SelectSubset<T, VaccineFindUniqueArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vaccine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VaccineFindUniqueOrThrowArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaccineFindUniqueOrThrowArgs>(args: SelectSubset<T, VaccineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaccine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindFirstArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaccineFindFirstArgs>(args?: SelectSubset<T, VaccineFindFirstArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vaccine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindFirstOrThrowArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaccineFindFirstOrThrowArgs>(args?: SelectSubset<T, VaccineFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vaccines
     * const vaccines = await prisma.vaccine.findMany()
     * 
     * // Get first 10 Vaccines
     * const vaccines = await prisma.vaccine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaccineFindManyArgs>(args?: SelectSubset<T, VaccineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vaccine.
     * @param {VaccineCreateArgs} args - Arguments to create a Vaccine.
     * @example
     * // Create one Vaccine
     * const Vaccine = await prisma.vaccine.create({
     *   data: {
     *     // ... data to create a Vaccine
     *   }
     * })
     * 
     */
    create<T extends VaccineCreateArgs>(args: SelectSubset<T, VaccineCreateArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vaccines.
     * @param {VaccineCreateManyArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccine = await prisma.vaccine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaccineCreateManyArgs>(args?: SelectSubset<T, VaccineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vaccines and returns the data saved in the database.
     * @param {VaccineCreateManyAndReturnArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccine = await prisma.vaccine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vaccines and only return the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaccineCreateManyAndReturnArgs>(args?: SelectSubset<T, VaccineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vaccine.
     * @param {VaccineDeleteArgs} args - Arguments to delete one Vaccine.
     * @example
     * // Delete one Vaccine
     * const Vaccine = await prisma.vaccine.delete({
     *   where: {
     *     // ... filter to delete one Vaccine
     *   }
     * })
     * 
     */
    delete<T extends VaccineDeleteArgs>(args: SelectSubset<T, VaccineDeleteArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vaccine.
     * @param {VaccineUpdateArgs} args - Arguments to update one Vaccine.
     * @example
     * // Update one Vaccine
     * const vaccine = await prisma.vaccine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaccineUpdateArgs>(args: SelectSubset<T, VaccineUpdateArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vaccines.
     * @param {VaccineDeleteManyArgs} args - Arguments to filter Vaccines to delete.
     * @example
     * // Delete a few Vaccines
     * const { count } = await prisma.vaccine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaccineDeleteManyArgs>(args?: SelectSubset<T, VaccineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vaccines
     * const vaccine = await prisma.vaccine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaccineUpdateManyArgs>(args: SelectSubset<T, VaccineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaccines and returns the data updated in the database.
     * @param {VaccineUpdateManyAndReturnArgs} args - Arguments to update many Vaccines.
     * @example
     * // Update many Vaccines
     * const vaccine = await prisma.vaccine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vaccines and only return the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VaccineUpdateManyAndReturnArgs>(args: SelectSubset<T, VaccineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vaccine.
     * @param {VaccineUpsertArgs} args - Arguments to update or create a Vaccine.
     * @example
     * // Update or create a Vaccine
     * const vaccine = await prisma.vaccine.upsert({
     *   create: {
     *     // ... data to create a Vaccine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaccine we want to update
     *   }
     * })
     */
    upsert<T extends VaccineUpsertArgs>(args: SelectSubset<T, VaccineUpsertArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineCountArgs} args - Arguments to filter Vaccines to count.
     * @example
     * // Count the number of Vaccines
     * const count = await prisma.vaccine.count({
     *   where: {
     *     // ... the filter for the Vaccines we want to count
     *   }
     * })
    **/
    count<T extends VaccineCountArgs>(
      args?: Subset<T, VaccineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaccineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaccine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VaccineAggregateArgs>(args: Subset<T, VaccineAggregateArgs>): Prisma.PrismaPromise<GetVaccineAggregateType<T>>

    /**
     * Group by Vaccine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VaccineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaccineGroupByArgs['orderBy'] }
        : { orderBy?: VaccineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VaccineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaccineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaccine model
   */
  readonly fields: VaccineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaccine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaccineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vaccine model
   */
  interface VaccineFieldRefs {
    readonly id: FieldRef<"Vaccine", 'Int'>
    readonly vaccine: FieldRef<"Vaccine", 'String'>
    readonly petId: FieldRef<"Vaccine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vaccine findUnique
   */
  export type VaccineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine findUniqueOrThrow
   */
  export type VaccineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine findFirst
   */
  export type VaccineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine findFirstOrThrow
   */
  export type VaccineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine findMany
   */
  export type VaccineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine create
   */
  export type VaccineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaccine.
     */
    data: XOR<VaccineCreateInput, VaccineUncheckedCreateInput>
  }

  /**
   * Vaccine createMany
   */
  export type VaccineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vaccines.
     */
    data: VaccineCreateManyInput | VaccineCreateManyInput[]
  }

  /**
   * Vaccine createManyAndReturn
   */
  export type VaccineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * The data used to create many Vaccines.
     */
    data: VaccineCreateManyInput | VaccineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaccine update
   */
  export type VaccineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaccine.
     */
    data: XOR<VaccineUpdateInput, VaccineUncheckedUpdateInput>
    /**
     * Choose, which Vaccine to update.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine updateMany
   */
  export type VaccineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vaccines.
     */
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyInput>
    /**
     * Filter which Vaccines to update
     */
    where?: VaccineWhereInput
    /**
     * Limit how many Vaccines to update.
     */
    limit?: number
  }

  /**
   * Vaccine updateManyAndReturn
   */
  export type VaccineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * The data used to update Vaccines.
     */
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyInput>
    /**
     * Filter which Vaccines to update
     */
    where?: VaccineWhereInput
    /**
     * Limit how many Vaccines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaccine upsert
   */
  export type VaccineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaccine to update in case it exists.
     */
    where: VaccineWhereUniqueInput
    /**
     * In case the Vaccine found by the `where` argument doesn't exist, create a new Vaccine with this data.
     */
    create: XOR<VaccineCreateInput, VaccineUncheckedCreateInput>
    /**
     * In case the Vaccine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaccineUpdateInput, VaccineUncheckedUpdateInput>
  }

  /**
   * Vaccine delete
   */
  export type VaccineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter which Vaccine to delete.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine deleteMany
   */
  export type VaccineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccines to delete
     */
    where?: VaccineWhereInput
    /**
     * Limit how many Vaccines to delete.
     */
    limit?: number
  }

  /**
   * Vaccine without action
   */
  export type VaccineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vaccine
     */
    omit?: VaccineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    tel: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    tel: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    tel: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    tel?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    tel?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    tel?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    tel?: boolean
    Pet?: boolean | User$PetArgs<ExtArgs>
    RequestForm?: boolean | User$RequestFormArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    tel?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    tel?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    tel?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "tel", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | User$PetArgs<ExtArgs>
    RequestForm?: boolean | User$RequestFormArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Pet: Prisma.$PetPayload<ExtArgs>[]
      RequestForm: Prisma.$RequestFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      lastName: string
      tel: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pet<T extends User$PetArgs<ExtArgs> = {}>(args?: Subset<T, User$PetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RequestForm<T extends User$RequestFormArgs<ExtArgs> = {}>(args?: Subset<T, User$RequestFormArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly tel: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Pet
   */
  export type User$PetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * User.RequestForm
   */
  export type User$RequestFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    where?: RequestFormWhereInput
    orderBy?: RequestFormOrderByWithRelationInput | RequestFormOrderByWithRelationInput[]
    cursor?: RequestFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestFormScalarFieldEnum | RequestFormScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RequestForm
   */

  export type AggregateRequestForm = {
    _count: RequestFormCountAggregateOutputType | null
    _avg: RequestFormAvgAggregateOutputType | null
    _sum: RequestFormSumAggregateOutputType | null
    _min: RequestFormMinAggregateOutputType | null
    _max: RequestFormMaxAggregateOutputType | null
  }

  export type RequestFormAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    petId: number | null
  }

  export type RequestFormSumAggregateOutputType = {
    id: number | null
    userId: number | null
    petId: number | null
  }

  export type RequestFormMinAggregateOutputType = {
    id: number | null
    houseEn: $Enums.HouseEn | null
    financial: $Enums.Financial | null
    pickup: $Enums.Pickup | null
    addressRequest: string | null
    userId: number | null
    petId: number | null
  }

  export type RequestFormMaxAggregateOutputType = {
    id: number | null
    houseEn: $Enums.HouseEn | null
    financial: $Enums.Financial | null
    pickup: $Enums.Pickup | null
    addressRequest: string | null
    userId: number | null
    petId: number | null
  }

  export type RequestFormCountAggregateOutputType = {
    id: number
    houseEn: number
    financial: number
    pickup: number
    addressRequest: number
    userId: number
    petId: number
    _all: number
  }


  export type RequestFormAvgAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
  }

  export type RequestFormSumAggregateInputType = {
    id?: true
    userId?: true
    petId?: true
  }

  export type RequestFormMinAggregateInputType = {
    id?: true
    houseEn?: true
    financial?: true
    pickup?: true
    addressRequest?: true
    userId?: true
    petId?: true
  }

  export type RequestFormMaxAggregateInputType = {
    id?: true
    houseEn?: true
    financial?: true
    pickup?: true
    addressRequest?: true
    userId?: true
    petId?: true
  }

  export type RequestFormCountAggregateInputType = {
    id?: true
    houseEn?: true
    financial?: true
    pickup?: true
    addressRequest?: true
    userId?: true
    petId?: true
    _all?: true
  }

  export type RequestFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestForm to aggregate.
     */
    where?: RequestFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestForms to fetch.
     */
    orderBy?: RequestFormOrderByWithRelationInput | RequestFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequestForms
    **/
    _count?: true | RequestFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestFormMaxAggregateInputType
  }

  export type GetRequestFormAggregateType<T extends RequestFormAggregateArgs> = {
        [P in keyof T & keyof AggregateRequestForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequestForm[P]>
      : GetScalarType<T[P], AggregateRequestForm[P]>
  }




  export type RequestFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestFormWhereInput
    orderBy?: RequestFormOrderByWithAggregationInput | RequestFormOrderByWithAggregationInput[]
    by: RequestFormScalarFieldEnum[] | RequestFormScalarFieldEnum
    having?: RequestFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestFormCountAggregateInputType | true
    _avg?: RequestFormAvgAggregateInputType
    _sum?: RequestFormSumAggregateInputType
    _min?: RequestFormMinAggregateInputType
    _max?: RequestFormMaxAggregateInputType
  }

  export type RequestFormGroupByOutputType = {
    id: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    userId: number
    petId: number
    _count: RequestFormCountAggregateOutputType | null
    _avg: RequestFormAvgAggregateOutputType | null
    _sum: RequestFormSumAggregateOutputType | null
    _min: RequestFormMinAggregateOutputType | null
    _max: RequestFormMaxAggregateOutputType | null
  }

  type GetRequestFormGroupByPayload<T extends RequestFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestFormGroupByOutputType[P]>
            : GetScalarType<T[P], RequestFormGroupByOutputType[P]>
        }
      >
    >


  export type RequestFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    houseEn?: boolean
    financial?: boolean
    pickup?: boolean
    addressRequest?: boolean
    userId?: boolean
    petId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestForm"]>

  export type RequestFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    houseEn?: boolean
    financial?: boolean
    pickup?: boolean
    addressRequest?: boolean
    userId?: boolean
    petId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestForm"]>

  export type RequestFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    houseEn?: boolean
    financial?: boolean
    pickup?: boolean
    addressRequest?: boolean
    userId?: boolean
    petId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requestForm"]>

  export type RequestFormSelectScalar = {
    id?: boolean
    houseEn?: boolean
    financial?: boolean
    pickup?: boolean
    addressRequest?: boolean
    userId?: boolean
    petId?: boolean
  }

  export type RequestFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "houseEn" | "financial" | "pickup" | "addressRequest" | "userId" | "petId", ExtArgs["result"]["requestForm"]>
  export type RequestFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type RequestFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type RequestFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $RequestFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequestForm"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      houseEn: $Enums.HouseEn
      financial: $Enums.Financial
      pickup: $Enums.Pickup
      addressRequest: string
      userId: number
      petId: number
    }, ExtArgs["result"]["requestForm"]>
    composites: {}
  }

  type RequestFormGetPayload<S extends boolean | null | undefined | RequestFormDefaultArgs> = $Result.GetResult<Prisma.$RequestFormPayload, S>

  type RequestFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestFormCountAggregateInputType | true
    }

  export interface RequestFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequestForm'], meta: { name: 'RequestForm' } }
    /**
     * Find zero or one RequestForm that matches the filter.
     * @param {RequestFormFindUniqueArgs} args - Arguments to find a RequestForm
     * @example
     * // Get one RequestForm
     * const requestForm = await prisma.requestForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFormFindUniqueArgs>(args: SelectSubset<T, RequestFormFindUniqueArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequestForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFormFindUniqueOrThrowArgs} args - Arguments to find a RequestForm
     * @example
     * // Get one RequestForm
     * const requestForm = await prisma.requestForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFormFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormFindFirstArgs} args - Arguments to find a RequestForm
     * @example
     * // Get one RequestForm
     * const requestForm = await prisma.requestForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFormFindFirstArgs>(args?: SelectSubset<T, RequestFormFindFirstArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequestForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormFindFirstOrThrowArgs} args - Arguments to find a RequestForm
     * @example
     * // Get one RequestForm
     * const requestForm = await prisma.requestForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFormFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequestForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequestForms
     * const requestForms = await prisma.requestForm.findMany()
     * 
     * // Get first 10 RequestForms
     * const requestForms = await prisma.requestForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestFormWithIdOnly = await prisma.requestForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFormFindManyArgs>(args?: SelectSubset<T, RequestFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequestForm.
     * @param {RequestFormCreateArgs} args - Arguments to create a RequestForm.
     * @example
     * // Create one RequestForm
     * const RequestForm = await prisma.requestForm.create({
     *   data: {
     *     // ... data to create a RequestForm
     *   }
     * })
     * 
     */
    create<T extends RequestFormCreateArgs>(args: SelectSubset<T, RequestFormCreateArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequestForms.
     * @param {RequestFormCreateManyArgs} args - Arguments to create many RequestForms.
     * @example
     * // Create many RequestForms
     * const requestForm = await prisma.requestForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestFormCreateManyArgs>(args?: SelectSubset<T, RequestFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequestForms and returns the data saved in the database.
     * @param {RequestFormCreateManyAndReturnArgs} args - Arguments to create many RequestForms.
     * @example
     * // Create many RequestForms
     * const requestForm = await prisma.requestForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequestForms and only return the `id`
     * const requestFormWithIdOnly = await prisma.requestForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestFormCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequestForm.
     * @param {RequestFormDeleteArgs} args - Arguments to delete one RequestForm.
     * @example
     * // Delete one RequestForm
     * const RequestForm = await prisma.requestForm.delete({
     *   where: {
     *     // ... filter to delete one RequestForm
     *   }
     * })
     * 
     */
    delete<T extends RequestFormDeleteArgs>(args: SelectSubset<T, RequestFormDeleteArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequestForm.
     * @param {RequestFormUpdateArgs} args - Arguments to update one RequestForm.
     * @example
     * // Update one RequestForm
     * const requestForm = await prisma.requestForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestFormUpdateArgs>(args: SelectSubset<T, RequestFormUpdateArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequestForms.
     * @param {RequestFormDeleteManyArgs} args - Arguments to filter RequestForms to delete.
     * @example
     * // Delete a few RequestForms
     * const { count } = await prisma.requestForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestFormDeleteManyArgs>(args?: SelectSubset<T, RequestFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequestForms
     * const requestForm = await prisma.requestForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestFormUpdateManyArgs>(args: SelectSubset<T, RequestFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequestForms and returns the data updated in the database.
     * @param {RequestFormUpdateManyAndReturnArgs} args - Arguments to update many RequestForms.
     * @example
     * // Update many RequestForms
     * const requestForm = await prisma.requestForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequestForms and only return the `id`
     * const requestFormWithIdOnly = await prisma.requestForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestFormUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequestForm.
     * @param {RequestFormUpsertArgs} args - Arguments to update or create a RequestForm.
     * @example
     * // Update or create a RequestForm
     * const requestForm = await prisma.requestForm.upsert({
     *   create: {
     *     // ... data to create a RequestForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequestForm we want to update
     *   }
     * })
     */
    upsert<T extends RequestFormUpsertArgs>(args: SelectSubset<T, RequestFormUpsertArgs<ExtArgs>>): Prisma__RequestFormClient<$Result.GetResult<Prisma.$RequestFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequestForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormCountArgs} args - Arguments to filter RequestForms to count.
     * @example
     * // Count the number of RequestForms
     * const count = await prisma.requestForm.count({
     *   where: {
     *     // ... the filter for the RequestForms we want to count
     *   }
     * })
    **/
    count<T extends RequestFormCountArgs>(
      args?: Subset<T, RequestFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequestForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestFormAggregateArgs>(args: Subset<T, RequestFormAggregateArgs>): Prisma.PrismaPromise<GetRequestFormAggregateType<T>>

    /**
     * Group by RequestForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestFormGroupByArgs['orderBy'] }
        : { orderBy?: RequestFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequestForm model
   */
  readonly fields: RequestFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequestForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequestForm model
   */
  interface RequestFormFieldRefs {
    readonly id: FieldRef<"RequestForm", 'Int'>
    readonly houseEn: FieldRef<"RequestForm", 'HouseEn'>
    readonly financial: FieldRef<"RequestForm", 'Financial'>
    readonly pickup: FieldRef<"RequestForm", 'Pickup'>
    readonly addressRequest: FieldRef<"RequestForm", 'String'>
    readonly userId: FieldRef<"RequestForm", 'Int'>
    readonly petId: FieldRef<"RequestForm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RequestForm findUnique
   */
  export type RequestFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * Filter, which RequestForm to fetch.
     */
    where: RequestFormWhereUniqueInput
  }

  /**
   * RequestForm findUniqueOrThrow
   */
  export type RequestFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * Filter, which RequestForm to fetch.
     */
    where: RequestFormWhereUniqueInput
  }

  /**
   * RequestForm findFirst
   */
  export type RequestFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * Filter, which RequestForm to fetch.
     */
    where?: RequestFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestForms to fetch.
     */
    orderBy?: RequestFormOrderByWithRelationInput | RequestFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestForms.
     */
    cursor?: RequestFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestForms.
     */
    distinct?: RequestFormScalarFieldEnum | RequestFormScalarFieldEnum[]
  }

  /**
   * RequestForm findFirstOrThrow
   */
  export type RequestFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * Filter, which RequestForm to fetch.
     */
    where?: RequestFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestForms to fetch.
     */
    orderBy?: RequestFormOrderByWithRelationInput | RequestFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequestForms.
     */
    cursor?: RequestFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequestForms.
     */
    distinct?: RequestFormScalarFieldEnum | RequestFormScalarFieldEnum[]
  }

  /**
   * RequestForm findMany
   */
  export type RequestFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * Filter, which RequestForms to fetch.
     */
    where?: RequestFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequestForms to fetch.
     */
    orderBy?: RequestFormOrderByWithRelationInput | RequestFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequestForms.
     */
    cursor?: RequestFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequestForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequestForms.
     */
    skip?: number
    distinct?: RequestFormScalarFieldEnum | RequestFormScalarFieldEnum[]
  }

  /**
   * RequestForm create
   */
  export type RequestFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * The data needed to create a RequestForm.
     */
    data: XOR<RequestFormCreateInput, RequestFormUncheckedCreateInput>
  }

  /**
   * RequestForm createMany
   */
  export type RequestFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequestForms.
     */
    data: RequestFormCreateManyInput | RequestFormCreateManyInput[]
  }

  /**
   * RequestForm createManyAndReturn
   */
  export type RequestFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * The data used to create many RequestForms.
     */
    data: RequestFormCreateManyInput | RequestFormCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestForm update
   */
  export type RequestFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * The data needed to update a RequestForm.
     */
    data: XOR<RequestFormUpdateInput, RequestFormUncheckedUpdateInput>
    /**
     * Choose, which RequestForm to update.
     */
    where: RequestFormWhereUniqueInput
  }

  /**
   * RequestForm updateMany
   */
  export type RequestFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequestForms.
     */
    data: XOR<RequestFormUpdateManyMutationInput, RequestFormUncheckedUpdateManyInput>
    /**
     * Filter which RequestForms to update
     */
    where?: RequestFormWhereInput
    /**
     * Limit how many RequestForms to update.
     */
    limit?: number
  }

  /**
   * RequestForm updateManyAndReturn
   */
  export type RequestFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * The data used to update RequestForms.
     */
    data: XOR<RequestFormUpdateManyMutationInput, RequestFormUncheckedUpdateManyInput>
    /**
     * Filter which RequestForms to update
     */
    where?: RequestFormWhereInput
    /**
     * Limit how many RequestForms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequestForm upsert
   */
  export type RequestFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * The filter to search for the RequestForm to update in case it exists.
     */
    where: RequestFormWhereUniqueInput
    /**
     * In case the RequestForm found by the `where` argument doesn't exist, create a new RequestForm with this data.
     */
    create: XOR<RequestFormCreateInput, RequestFormUncheckedCreateInput>
    /**
     * In case the RequestForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestFormUpdateInput, RequestFormUncheckedUpdateInput>
  }

  /**
   * RequestForm delete
   */
  export type RequestFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
    /**
     * Filter which RequestForm to delete.
     */
    where: RequestFormWhereUniqueInput
  }

  /**
   * RequestForm deleteMany
   */
  export type RequestFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequestForms to delete
     */
    where?: RequestFormWhereInput
    /**
     * Limit how many RequestForms to delete.
     */
    limit?: number
  }

  /**
   * RequestForm without action
   */
  export type RequestFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestForm
     */
    select?: RequestFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequestForm
     */
    omit?: RequestFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestFormInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    gender: 'gender',
    pictureUrl: 'pictureUrl',
    color: 'color',
    dateOfBirth: 'dateOfBirth',
    ageYear: 'ageYear',
    ageMonth: 'ageMonth',
    breed: 'breed',
    phoneNumber: 'phoneNumber',
    address: 'address',
    vacineUrl: 'vacineUrl',
    userId: 'userId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const VaccineScalarFieldEnum: {
    id: 'id',
    vaccine: 'vaccine',
    petId: 'petId'
  };

  export type VaccineScalarFieldEnum = (typeof VaccineScalarFieldEnum)[keyof typeof VaccineScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    tel: 'tel'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RequestFormScalarFieldEnum: {
    id: 'id',
    houseEn: 'houseEn',
    financial: 'financial',
    pickup: 'pickup',
    addressRequest: 'addressRequest',
    userId: 'userId',
    petId: 'petId'
  };

  export type RequestFormScalarFieldEnum = (typeof RequestFormScalarFieldEnum)[keyof typeof RequestFormScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'HouseEn'
   */
  export type EnumHouseEnFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HouseEn'>
    


  /**
   * Reference to a field of type 'Financial'
   */
  export type EnumFinancialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Financial'>
    


  /**
   * Reference to a field of type 'Pickup'
   */
  export type EnumPickupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Pickup'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    type?: EnumTypeFilter<"Pet"> | $Enums.Type
    gender?: EnumGenderFilter<"Pet"> | $Enums.Gender
    pictureUrl?: StringFilter<"Pet"> | string
    color?: StringNullableFilter<"Pet"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Pet"> | Date | string | null
    ageYear?: IntNullableFilter<"Pet"> | number | null
    ageMonth?: IntNullableFilter<"Pet"> | number | null
    breed?: StringNullableFilter<"Pet"> | string | null
    phoneNumber?: StringFilter<"Pet"> | string
    address?: StringFilter<"Pet"> | string
    vacineUrl?: StringNullableFilter<"Pet"> | string | null
    userId?: IntFilter<"Pet"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Vaccine?: VaccineListRelationFilter
    RequestForm?: RequestFormListRelationFilter
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    pictureUrl?: SortOrder
    color?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    ageYear?: SortOrderInput | SortOrder
    ageMonth?: SortOrderInput | SortOrder
    breed?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    vacineUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    Vaccine?: VaccineOrderByRelationAggregateInput
    RequestForm?: RequestFormOrderByRelationAggregateInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    type?: EnumTypeFilter<"Pet"> | $Enums.Type
    gender?: EnumGenderFilter<"Pet"> | $Enums.Gender
    pictureUrl?: StringFilter<"Pet"> | string
    color?: StringNullableFilter<"Pet"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Pet"> | Date | string | null
    ageYear?: IntNullableFilter<"Pet"> | number | null
    ageMonth?: IntNullableFilter<"Pet"> | number | null
    breed?: StringNullableFilter<"Pet"> | string | null
    phoneNumber?: StringFilter<"Pet"> | string
    address?: StringFilter<"Pet"> | string
    vacineUrl?: StringNullableFilter<"Pet"> | string | null
    userId?: IntFilter<"Pet"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Vaccine?: VaccineListRelationFilter
    RequestForm?: RequestFormListRelationFilter
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    pictureUrl?: SortOrder
    color?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    ageYear?: SortOrderInput | SortOrder
    ageMonth?: SortOrderInput | SortOrder
    breed?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    vacineUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    type?: EnumTypeWithAggregatesFilter<"Pet"> | $Enums.Type
    gender?: EnumGenderWithAggregatesFilter<"Pet"> | $Enums.Gender
    pictureUrl?: StringWithAggregatesFilter<"Pet"> | string
    color?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    ageYear?: IntNullableWithAggregatesFilter<"Pet"> | number | null
    ageMonth?: IntNullableWithAggregatesFilter<"Pet"> | number | null
    breed?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"Pet"> | string
    address?: StringWithAggregatesFilter<"Pet"> | string
    vacineUrl?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    userId?: IntWithAggregatesFilter<"Pet"> | number
  }

  export type VaccineWhereInput = {
    AND?: VaccineWhereInput | VaccineWhereInput[]
    OR?: VaccineWhereInput[]
    NOT?: VaccineWhereInput | VaccineWhereInput[]
    id?: IntFilter<"Vaccine"> | number
    vaccine?: StringNullableFilter<"Vaccine"> | string | null
    petId?: IntFilter<"Vaccine"> | number
    Pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type VaccineOrderByWithRelationInput = {
    id?: SortOrder
    vaccine?: SortOrderInput | SortOrder
    petId?: SortOrder
    Pet?: PetOrderByWithRelationInput
  }

  export type VaccineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VaccineWhereInput | VaccineWhereInput[]
    OR?: VaccineWhereInput[]
    NOT?: VaccineWhereInput | VaccineWhereInput[]
    vaccine?: StringNullableFilter<"Vaccine"> | string | null
    petId?: IntFilter<"Vaccine"> | number
    Pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type VaccineOrderByWithAggregationInput = {
    id?: SortOrder
    vaccine?: SortOrderInput | SortOrder
    petId?: SortOrder
    _count?: VaccineCountOrderByAggregateInput
    _avg?: VaccineAvgOrderByAggregateInput
    _max?: VaccineMaxOrderByAggregateInput
    _min?: VaccineMinOrderByAggregateInput
    _sum?: VaccineSumOrderByAggregateInput
  }

  export type VaccineScalarWhereWithAggregatesInput = {
    AND?: VaccineScalarWhereWithAggregatesInput | VaccineScalarWhereWithAggregatesInput[]
    OR?: VaccineScalarWhereWithAggregatesInput[]
    NOT?: VaccineScalarWhereWithAggregatesInput | VaccineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vaccine"> | number
    vaccine?: StringNullableWithAggregatesFilter<"Vaccine"> | string | null
    petId?: IntWithAggregatesFilter<"Vaccine"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    Pet?: PetListRelationFilter
    RequestForm?: RequestFormListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    Pet?: PetOrderByRelationAggregateInput
    RequestForm?: RequestFormOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    tel?: StringFilter<"User"> | string
    Pet?: PetListRelationFilter
    RequestForm?: RequestFormListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    tel?: StringWithAggregatesFilter<"User"> | string
  }

  export type RequestFormWhereInput = {
    AND?: RequestFormWhereInput | RequestFormWhereInput[]
    OR?: RequestFormWhereInput[]
    NOT?: RequestFormWhereInput | RequestFormWhereInput[]
    id?: IntFilter<"RequestForm"> | number
    houseEn?: EnumHouseEnFilter<"RequestForm"> | $Enums.HouseEn
    financial?: EnumFinancialFilter<"RequestForm"> | $Enums.Financial
    pickup?: EnumPickupFilter<"RequestForm"> | $Enums.Pickup
    addressRequest?: StringFilter<"RequestForm"> | string
    userId?: IntFilter<"RequestForm"> | number
    petId?: IntFilter<"RequestForm"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type RequestFormOrderByWithRelationInput = {
    id?: SortOrder
    houseEn?: SortOrder
    financial?: SortOrder
    pickup?: SortOrder
    addressRequest?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    User?: UserOrderByWithRelationInput
    Pet?: PetOrderByWithRelationInput
  }

  export type RequestFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RequestFormWhereInput | RequestFormWhereInput[]
    OR?: RequestFormWhereInput[]
    NOT?: RequestFormWhereInput | RequestFormWhereInput[]
    houseEn?: EnumHouseEnFilter<"RequestForm"> | $Enums.HouseEn
    financial?: EnumFinancialFilter<"RequestForm"> | $Enums.Financial
    pickup?: EnumPickupFilter<"RequestForm"> | $Enums.Pickup
    addressRequest?: StringFilter<"RequestForm"> | string
    userId?: IntFilter<"RequestForm"> | number
    petId?: IntFilter<"RequestForm"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type RequestFormOrderByWithAggregationInput = {
    id?: SortOrder
    houseEn?: SortOrder
    financial?: SortOrder
    pickup?: SortOrder
    addressRequest?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
    _count?: RequestFormCountOrderByAggregateInput
    _avg?: RequestFormAvgOrderByAggregateInput
    _max?: RequestFormMaxOrderByAggregateInput
    _min?: RequestFormMinOrderByAggregateInput
    _sum?: RequestFormSumOrderByAggregateInput
  }

  export type RequestFormScalarWhereWithAggregatesInput = {
    AND?: RequestFormScalarWhereWithAggregatesInput | RequestFormScalarWhereWithAggregatesInput[]
    OR?: RequestFormScalarWhereWithAggregatesInput[]
    NOT?: RequestFormScalarWhereWithAggregatesInput | RequestFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RequestForm"> | number
    houseEn?: EnumHouseEnWithAggregatesFilter<"RequestForm"> | $Enums.HouseEn
    financial?: EnumFinancialWithAggregatesFilter<"RequestForm"> | $Enums.Financial
    pickup?: EnumPickupWithAggregatesFilter<"RequestForm"> | $Enums.Pickup
    addressRequest?: StringWithAggregatesFilter<"RequestForm"> | string
    userId?: IntWithAggregatesFilter<"RequestForm"> | number
    petId?: IntWithAggregatesFilter<"RequestForm"> | number
  }

  export type PetCreateInput = {
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    User: UserCreateNestedOneWithoutPetInput
    Vaccine?: VaccineCreateNestedManyWithoutPetInput
    RequestForm?: RequestFormCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    userId: number
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutPetInput
    RequestForm?: RequestFormUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutPetNestedInput
    Vaccine?: VaccineUpdateManyWithoutPetNestedInput
    RequestForm?: RequestFormUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Vaccine?: VaccineUncheckedUpdateManyWithoutPetNestedInput
    RequestForm?: RequestFormUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    userId: number
  }

  export type PetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VaccineCreateInput = {
    vaccine?: string | null
    Pet: PetCreateNestedOneWithoutVaccineInput
  }

  export type VaccineUncheckedCreateInput = {
    id?: number
    vaccine?: string | null
    petId: number
  }

  export type VaccineUpdateInput = {
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
    Pet?: PetUpdateOneRequiredWithoutVaccineNestedInput
  }

  export type VaccineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type VaccineCreateManyInput = {
    id?: number
    vaccine?: string | null
    petId: number
  }

  export type VaccineUpdateManyMutationInput = {
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VaccineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    Pet?: PetCreateNestedManyWithoutUserInput
    RequestForm?: RequestFormCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    Pet?: PetUncheckedCreateNestedManyWithoutUserInput
    RequestForm?: RequestFormUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    Pet?: PetUpdateManyWithoutUserNestedInput
    RequestForm?: RequestFormUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    Pet?: PetUncheckedUpdateManyWithoutUserNestedInput
    RequestForm?: RequestFormUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
  }

  export type RequestFormCreateInput = {
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    User: UserCreateNestedOneWithoutRequestFormInput
    Pet: PetCreateNestedOneWithoutRequestFormInput
  }

  export type RequestFormUncheckedCreateInput = {
    id?: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    userId: number
    petId: number
  }

  export type RequestFormUpdateInput = {
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutRequestFormNestedInput
    Pet?: PetUpdateOneRequiredWithoutRequestFormNestedInput
  }

  export type RequestFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFormCreateManyInput = {
    id?: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    userId: number
    petId: number
  }

  export type RequestFormUpdateManyMutationInput = {
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
  }

  export type RequestFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VaccineListRelationFilter = {
    every?: VaccineWhereInput
    some?: VaccineWhereInput
    none?: VaccineWhereInput
  }

  export type RequestFormListRelationFilter = {
    every?: RequestFormWhereInput
    some?: RequestFormWhereInput
    none?: RequestFormWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VaccineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    pictureUrl?: SortOrder
    color?: SortOrder
    dateOfBirth?: SortOrder
    ageYear?: SortOrder
    ageMonth?: SortOrder
    breed?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    vacineUrl?: SortOrder
    userId?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    ageYear?: SortOrder
    ageMonth?: SortOrder
    userId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    pictureUrl?: SortOrder
    color?: SortOrder
    dateOfBirth?: SortOrder
    ageYear?: SortOrder
    ageMonth?: SortOrder
    breed?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    vacineUrl?: SortOrder
    userId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    pictureUrl?: SortOrder
    color?: SortOrder
    dateOfBirth?: SortOrder
    ageYear?: SortOrder
    ageMonth?: SortOrder
    breed?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    vacineUrl?: SortOrder
    userId?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    ageYear?: SortOrder
    ageMonth?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type VaccineCountOrderByAggregateInput = {
    id?: SortOrder
    vaccine?: SortOrder
    petId?: SortOrder
  }

  export type VaccineAvgOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
  }

  export type VaccineMaxOrderByAggregateInput = {
    id?: SortOrder
    vaccine?: SortOrder
    petId?: SortOrder
  }

  export type VaccineMinOrderByAggregateInput = {
    id?: SortOrder
    vaccine?: SortOrder
    petId?: SortOrder
  }

  export type VaccineSumOrderByAggregateInput = {
    id?: SortOrder
    petId?: SortOrder
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    tel?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHouseEnFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseEn | EnumHouseEnFieldRefInput<$PrismaModel>
    in?: $Enums.HouseEn[]
    notIn?: $Enums.HouseEn[]
    not?: NestedEnumHouseEnFilter<$PrismaModel> | $Enums.HouseEn
  }

  export type EnumFinancialFilter<$PrismaModel = never> = {
    equals?: $Enums.Financial | EnumFinancialFieldRefInput<$PrismaModel>
    in?: $Enums.Financial[]
    notIn?: $Enums.Financial[]
    not?: NestedEnumFinancialFilter<$PrismaModel> | $Enums.Financial
  }

  export type EnumPickupFilter<$PrismaModel = never> = {
    equals?: $Enums.Pickup | EnumPickupFieldRefInput<$PrismaModel>
    in?: $Enums.Pickup[]
    notIn?: $Enums.Pickup[]
    not?: NestedEnumPickupFilter<$PrismaModel> | $Enums.Pickup
  }

  export type RequestFormCountOrderByAggregateInput = {
    id?: SortOrder
    houseEn?: SortOrder
    financial?: SortOrder
    pickup?: SortOrder
    addressRequest?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type RequestFormAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type RequestFormMaxOrderByAggregateInput = {
    id?: SortOrder
    houseEn?: SortOrder
    financial?: SortOrder
    pickup?: SortOrder
    addressRequest?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type RequestFormMinOrderByAggregateInput = {
    id?: SortOrder
    houseEn?: SortOrder
    financial?: SortOrder
    pickup?: SortOrder
    addressRequest?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type RequestFormSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    petId?: SortOrder
  }

  export type EnumHouseEnWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseEn | EnumHouseEnFieldRefInput<$PrismaModel>
    in?: $Enums.HouseEn[]
    notIn?: $Enums.HouseEn[]
    not?: NestedEnumHouseEnWithAggregatesFilter<$PrismaModel> | $Enums.HouseEn
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseEnFilter<$PrismaModel>
    _max?: NestedEnumHouseEnFilter<$PrismaModel>
  }

  export type EnumFinancialWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Financial | EnumFinancialFieldRefInput<$PrismaModel>
    in?: $Enums.Financial[]
    notIn?: $Enums.Financial[]
    not?: NestedEnumFinancialWithAggregatesFilter<$PrismaModel> | $Enums.Financial
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFinancialFilter<$PrismaModel>
    _max?: NestedEnumFinancialFilter<$PrismaModel>
  }

  export type EnumPickupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Pickup | EnumPickupFieldRefInput<$PrismaModel>
    in?: $Enums.Pickup[]
    notIn?: $Enums.Pickup[]
    not?: NestedEnumPickupWithAggregatesFilter<$PrismaModel> | $Enums.Pickup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupFilter<$PrismaModel>
    _max?: NestedEnumPickupFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutPetInput = {
    create?: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetInput
    connect?: UserWhereUniqueInput
  }

  export type VaccineCreateNestedManyWithoutPetInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type RequestFormCreateNestedManyWithoutPetInput = {
    create?: XOR<RequestFormCreateWithoutPetInput, RequestFormUncheckedCreateWithoutPetInput> | RequestFormCreateWithoutPetInput[] | RequestFormUncheckedCreateWithoutPetInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutPetInput | RequestFormCreateOrConnectWithoutPetInput[]
    createMany?: RequestFormCreateManyPetInputEnvelope
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
  }

  export type VaccineUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type RequestFormUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<RequestFormCreateWithoutPetInput, RequestFormUncheckedCreateWithoutPetInput> | RequestFormCreateWithoutPetInput[] | RequestFormUncheckedCreateWithoutPetInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutPetInput | RequestFormCreateOrConnectWithoutPetInput[]
    createMany?: RequestFormCreateManyPetInputEnvelope
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPetNestedInput = {
    create?: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetInput
    upsert?: UserUpsertWithoutPetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetInput, UserUpdateWithoutPetInput>, UserUncheckedUpdateWithoutPetInput>
  }

  export type VaccineUpdateManyWithoutPetNestedInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutPetInput | VaccineUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutPetInput | VaccineUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutPetInput | VaccineUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type RequestFormUpdateManyWithoutPetNestedInput = {
    create?: XOR<RequestFormCreateWithoutPetInput, RequestFormUncheckedCreateWithoutPetInput> | RequestFormCreateWithoutPetInput[] | RequestFormUncheckedCreateWithoutPetInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutPetInput | RequestFormCreateOrConnectWithoutPetInput[]
    upsert?: RequestFormUpsertWithWhereUniqueWithoutPetInput | RequestFormUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: RequestFormCreateManyPetInputEnvelope
    set?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    disconnect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    delete?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    update?: RequestFormUpdateWithWhereUniqueWithoutPetInput | RequestFormUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: RequestFormUpdateManyWithWhereWithoutPetInput | RequestFormUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: RequestFormScalarWhereInput | RequestFormScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VaccineUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput> | VaccineCreateWithoutPetInput[] | VaccineUncheckedCreateWithoutPetInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPetInput | VaccineCreateOrConnectWithoutPetInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutPetInput | VaccineUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: VaccineCreateManyPetInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutPetInput | VaccineUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutPetInput | VaccineUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type RequestFormUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<RequestFormCreateWithoutPetInput, RequestFormUncheckedCreateWithoutPetInput> | RequestFormCreateWithoutPetInput[] | RequestFormUncheckedCreateWithoutPetInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutPetInput | RequestFormCreateOrConnectWithoutPetInput[]
    upsert?: RequestFormUpsertWithWhereUniqueWithoutPetInput | RequestFormUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: RequestFormCreateManyPetInputEnvelope
    set?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    disconnect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    delete?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    update?: RequestFormUpdateWithWhereUniqueWithoutPetInput | RequestFormUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: RequestFormUpdateManyWithWhereWithoutPetInput | RequestFormUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: RequestFormScalarWhereInput | RequestFormScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutVaccineInput = {
    create?: XOR<PetCreateWithoutVaccineInput, PetUncheckedCreateWithoutVaccineInput>
    connectOrCreate?: PetCreateOrConnectWithoutVaccineInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutVaccineNestedInput = {
    create?: XOR<PetCreateWithoutVaccineInput, PetUncheckedCreateWithoutVaccineInput>
    connectOrCreate?: PetCreateOrConnectWithoutVaccineInput
    upsert?: PetUpsertWithoutVaccineInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutVaccineInput, PetUpdateWithoutVaccineInput>, PetUncheckedUpdateWithoutVaccineInput>
  }

  export type PetCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type RequestFormCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestFormCreateWithoutUserInput, RequestFormUncheckedCreateWithoutUserInput> | RequestFormCreateWithoutUserInput[] | RequestFormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutUserInput | RequestFormCreateOrConnectWithoutUserInput[]
    createMany?: RequestFormCreateManyUserInputEnvelope
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type RequestFormUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestFormCreateWithoutUserInput, RequestFormUncheckedCreateWithoutUserInput> | RequestFormCreateWithoutUserInput[] | RequestFormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutUserInput | RequestFormCreateOrConnectWithoutUserInput[]
    createMany?: RequestFormCreateManyUserInputEnvelope
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
  }

  export type PetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type RequestFormUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestFormCreateWithoutUserInput, RequestFormUncheckedCreateWithoutUserInput> | RequestFormCreateWithoutUserInput[] | RequestFormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutUserInput | RequestFormCreateOrConnectWithoutUserInput[]
    upsert?: RequestFormUpsertWithWhereUniqueWithoutUserInput | RequestFormUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestFormCreateManyUserInputEnvelope
    set?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    disconnect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    delete?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    update?: RequestFormUpdateWithWhereUniqueWithoutUserInput | RequestFormUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestFormUpdateManyWithWhereWithoutUserInput | RequestFormUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestFormScalarWhereInput | RequestFormScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type RequestFormUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestFormCreateWithoutUserInput, RequestFormUncheckedCreateWithoutUserInput> | RequestFormCreateWithoutUserInput[] | RequestFormUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestFormCreateOrConnectWithoutUserInput | RequestFormCreateOrConnectWithoutUserInput[]
    upsert?: RequestFormUpsertWithWhereUniqueWithoutUserInput | RequestFormUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestFormCreateManyUserInputEnvelope
    set?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    disconnect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    delete?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    connect?: RequestFormWhereUniqueInput | RequestFormWhereUniqueInput[]
    update?: RequestFormUpdateWithWhereUniqueWithoutUserInput | RequestFormUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestFormUpdateManyWithWhereWithoutUserInput | RequestFormUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestFormScalarWhereInput | RequestFormScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRequestFormInput = {
    create?: XOR<UserCreateWithoutRequestFormInput, UserUncheckedCreateWithoutRequestFormInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestFormInput
    connect?: UserWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutRequestFormInput = {
    create?: XOR<PetCreateWithoutRequestFormInput, PetUncheckedCreateWithoutRequestFormInput>
    connectOrCreate?: PetCreateOrConnectWithoutRequestFormInput
    connect?: PetWhereUniqueInput
  }

  export type EnumHouseEnFieldUpdateOperationsInput = {
    set?: $Enums.HouseEn
  }

  export type EnumFinancialFieldUpdateOperationsInput = {
    set?: $Enums.Financial
  }

  export type EnumPickupFieldUpdateOperationsInput = {
    set?: $Enums.Pickup
  }

  export type UserUpdateOneRequiredWithoutRequestFormNestedInput = {
    create?: XOR<UserCreateWithoutRequestFormInput, UserUncheckedCreateWithoutRequestFormInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestFormInput
    upsert?: UserUpsertWithoutRequestFormInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestFormInput, UserUpdateWithoutRequestFormInput>, UserUncheckedUpdateWithoutRequestFormInput>
  }

  export type PetUpdateOneRequiredWithoutRequestFormNestedInput = {
    create?: XOR<PetCreateWithoutRequestFormInput, PetUncheckedCreateWithoutRequestFormInput>
    connectOrCreate?: PetCreateOrConnectWithoutRequestFormInput
    upsert?: PetUpsertWithoutRequestFormInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutRequestFormInput, PetUpdateWithoutRequestFormInput>, PetUncheckedUpdateWithoutRequestFormInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[]
    notIn?: $Enums.Type[]
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumHouseEnFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseEn | EnumHouseEnFieldRefInput<$PrismaModel>
    in?: $Enums.HouseEn[]
    notIn?: $Enums.HouseEn[]
    not?: NestedEnumHouseEnFilter<$PrismaModel> | $Enums.HouseEn
  }

  export type NestedEnumFinancialFilter<$PrismaModel = never> = {
    equals?: $Enums.Financial | EnumFinancialFieldRefInput<$PrismaModel>
    in?: $Enums.Financial[]
    notIn?: $Enums.Financial[]
    not?: NestedEnumFinancialFilter<$PrismaModel> | $Enums.Financial
  }

  export type NestedEnumPickupFilter<$PrismaModel = never> = {
    equals?: $Enums.Pickup | EnumPickupFieldRefInput<$PrismaModel>
    in?: $Enums.Pickup[]
    notIn?: $Enums.Pickup[]
    not?: NestedEnumPickupFilter<$PrismaModel> | $Enums.Pickup
  }

  export type NestedEnumHouseEnWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseEn | EnumHouseEnFieldRefInput<$PrismaModel>
    in?: $Enums.HouseEn[]
    notIn?: $Enums.HouseEn[]
    not?: NestedEnumHouseEnWithAggregatesFilter<$PrismaModel> | $Enums.HouseEn
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHouseEnFilter<$PrismaModel>
    _max?: NestedEnumHouseEnFilter<$PrismaModel>
  }

  export type NestedEnumFinancialWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Financial | EnumFinancialFieldRefInput<$PrismaModel>
    in?: $Enums.Financial[]
    notIn?: $Enums.Financial[]
    not?: NestedEnumFinancialWithAggregatesFilter<$PrismaModel> | $Enums.Financial
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFinancialFilter<$PrismaModel>
    _max?: NestedEnumFinancialFilter<$PrismaModel>
  }

  export type NestedEnumPickupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Pickup | EnumPickupFieldRefInput<$PrismaModel>
    in?: $Enums.Pickup[]
    notIn?: $Enums.Pickup[]
    not?: NestedEnumPickupWithAggregatesFilter<$PrismaModel> | $Enums.Pickup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupFilter<$PrismaModel>
    _max?: NestedEnumPickupFilter<$PrismaModel>
  }

  export type UserCreateWithoutPetInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    RequestForm?: RequestFormCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    RequestForm?: RequestFormUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
  }

  export type VaccineCreateWithoutPetInput = {
    vaccine?: string | null
  }

  export type VaccineUncheckedCreateWithoutPetInput = {
    id?: number
    vaccine?: string | null
  }

  export type VaccineCreateOrConnectWithoutPetInput = {
    where: VaccineWhereUniqueInput
    create: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput>
  }

  export type VaccineCreateManyPetInputEnvelope = {
    data: VaccineCreateManyPetInput | VaccineCreateManyPetInput[]
  }

  export type RequestFormCreateWithoutPetInput = {
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    User: UserCreateNestedOneWithoutRequestFormInput
  }

  export type RequestFormUncheckedCreateWithoutPetInput = {
    id?: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    userId: number
  }

  export type RequestFormCreateOrConnectWithoutPetInput = {
    where: RequestFormWhereUniqueInput
    create: XOR<RequestFormCreateWithoutPetInput, RequestFormUncheckedCreateWithoutPetInput>
  }

  export type RequestFormCreateManyPetInputEnvelope = {
    data: RequestFormCreateManyPetInput | RequestFormCreateManyPetInput[]
  }

  export type UserUpsertWithoutPetInput = {
    update: XOR<UserUpdateWithoutPetInput, UserUncheckedUpdateWithoutPetInput>
    create: XOR<UserCreateWithoutPetInput, UserUncheckedCreateWithoutPetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetInput, UserUncheckedUpdateWithoutPetInput>
  }

  export type UserUpdateWithoutPetInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    RequestForm?: RequestFormUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    RequestForm?: RequestFormUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VaccineUpsertWithWhereUniqueWithoutPetInput = {
    where: VaccineWhereUniqueInput
    update: XOR<VaccineUpdateWithoutPetInput, VaccineUncheckedUpdateWithoutPetInput>
    create: XOR<VaccineCreateWithoutPetInput, VaccineUncheckedCreateWithoutPetInput>
  }

  export type VaccineUpdateWithWhereUniqueWithoutPetInput = {
    where: VaccineWhereUniqueInput
    data: XOR<VaccineUpdateWithoutPetInput, VaccineUncheckedUpdateWithoutPetInput>
  }

  export type VaccineUpdateManyWithWhereWithoutPetInput = {
    where: VaccineScalarWhereInput
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyWithoutPetInput>
  }

  export type VaccineScalarWhereInput = {
    AND?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
    OR?: VaccineScalarWhereInput[]
    NOT?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
    id?: IntFilter<"Vaccine"> | number
    vaccine?: StringNullableFilter<"Vaccine"> | string | null
    petId?: IntFilter<"Vaccine"> | number
  }

  export type RequestFormUpsertWithWhereUniqueWithoutPetInput = {
    where: RequestFormWhereUniqueInput
    update: XOR<RequestFormUpdateWithoutPetInput, RequestFormUncheckedUpdateWithoutPetInput>
    create: XOR<RequestFormCreateWithoutPetInput, RequestFormUncheckedCreateWithoutPetInput>
  }

  export type RequestFormUpdateWithWhereUniqueWithoutPetInput = {
    where: RequestFormWhereUniqueInput
    data: XOR<RequestFormUpdateWithoutPetInput, RequestFormUncheckedUpdateWithoutPetInput>
  }

  export type RequestFormUpdateManyWithWhereWithoutPetInput = {
    where: RequestFormScalarWhereInput
    data: XOR<RequestFormUpdateManyMutationInput, RequestFormUncheckedUpdateManyWithoutPetInput>
  }

  export type RequestFormScalarWhereInput = {
    AND?: RequestFormScalarWhereInput | RequestFormScalarWhereInput[]
    OR?: RequestFormScalarWhereInput[]
    NOT?: RequestFormScalarWhereInput | RequestFormScalarWhereInput[]
    id?: IntFilter<"RequestForm"> | number
    houseEn?: EnumHouseEnFilter<"RequestForm"> | $Enums.HouseEn
    financial?: EnumFinancialFilter<"RequestForm"> | $Enums.Financial
    pickup?: EnumPickupFilter<"RequestForm"> | $Enums.Pickup
    addressRequest?: StringFilter<"RequestForm"> | string
    userId?: IntFilter<"RequestForm"> | number
    petId?: IntFilter<"RequestForm"> | number
  }

  export type PetCreateWithoutVaccineInput = {
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    User: UserCreateNestedOneWithoutPetInput
    RequestForm?: RequestFormCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutVaccineInput = {
    id?: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    userId: number
    RequestForm?: RequestFormUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutVaccineInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutVaccineInput, PetUncheckedCreateWithoutVaccineInput>
  }

  export type PetUpsertWithoutVaccineInput = {
    update: XOR<PetUpdateWithoutVaccineInput, PetUncheckedUpdateWithoutVaccineInput>
    create: XOR<PetCreateWithoutVaccineInput, PetUncheckedCreateWithoutVaccineInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutVaccineInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutVaccineInput, PetUncheckedUpdateWithoutVaccineInput>
  }

  export type PetUpdateWithoutVaccineInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutPetNestedInput
    RequestForm?: RequestFormUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutVaccineInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    RequestForm?: RequestFormUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateWithoutUserInput = {
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    Vaccine?: VaccineCreateNestedManyWithoutPetInput
    RequestForm?: RequestFormCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutPetInput
    RequestForm?: RequestFormUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutUserInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetCreateManyUserInputEnvelope = {
    data: PetCreateManyUserInput | PetCreateManyUserInput[]
  }

  export type RequestFormCreateWithoutUserInput = {
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    Pet: PetCreateNestedOneWithoutRequestFormInput
  }

  export type RequestFormUncheckedCreateWithoutUserInput = {
    id?: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    petId: number
  }

  export type RequestFormCreateOrConnectWithoutUserInput = {
    where: RequestFormWhereUniqueInput
    create: XOR<RequestFormCreateWithoutUserInput, RequestFormUncheckedCreateWithoutUserInput>
  }

  export type RequestFormCreateManyUserInputEnvelope = {
    data: RequestFormCreateManyUserInput | RequestFormCreateManyUserInput[]
  }

  export type PetUpsertWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetUpdateWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
  }

  export type PetUpdateManyWithWhereWithoutUserInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutUserInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    type?: EnumTypeFilter<"Pet"> | $Enums.Type
    gender?: EnumGenderFilter<"Pet"> | $Enums.Gender
    pictureUrl?: StringFilter<"Pet"> | string
    color?: StringNullableFilter<"Pet"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Pet"> | Date | string | null
    ageYear?: IntNullableFilter<"Pet"> | number | null
    ageMonth?: IntNullableFilter<"Pet"> | number | null
    breed?: StringNullableFilter<"Pet"> | string | null
    phoneNumber?: StringFilter<"Pet"> | string
    address?: StringFilter<"Pet"> | string
    vacineUrl?: StringNullableFilter<"Pet"> | string | null
    userId?: IntFilter<"Pet"> | number
  }

  export type RequestFormUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestFormWhereUniqueInput
    update: XOR<RequestFormUpdateWithoutUserInput, RequestFormUncheckedUpdateWithoutUserInput>
    create: XOR<RequestFormCreateWithoutUserInput, RequestFormUncheckedCreateWithoutUserInput>
  }

  export type RequestFormUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestFormWhereUniqueInput
    data: XOR<RequestFormUpdateWithoutUserInput, RequestFormUncheckedUpdateWithoutUserInput>
  }

  export type RequestFormUpdateManyWithWhereWithoutUserInput = {
    where: RequestFormScalarWhereInput
    data: XOR<RequestFormUpdateManyMutationInput, RequestFormUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutRequestFormInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    Pet?: PetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestFormInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    tel: string
    Pet?: PetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestFormInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestFormInput, UserUncheckedCreateWithoutRequestFormInput>
  }

  export type PetCreateWithoutRequestFormInput = {
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    User: UserCreateNestedOneWithoutPetInput
    Vaccine?: VaccineCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutRequestFormInput = {
    id?: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
    userId: number
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutRequestFormInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutRequestFormInput, PetUncheckedCreateWithoutRequestFormInput>
  }

  export type UserUpsertWithoutRequestFormInput = {
    update: XOR<UserUpdateWithoutRequestFormInput, UserUncheckedUpdateWithoutRequestFormInput>
    create: XOR<UserCreateWithoutRequestFormInput, UserUncheckedCreateWithoutRequestFormInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestFormInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestFormInput, UserUncheckedUpdateWithoutRequestFormInput>
  }

  export type UserUpdateWithoutRequestFormInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    Pet?: PetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    Pet?: PetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PetUpsertWithoutRequestFormInput = {
    update: XOR<PetUpdateWithoutRequestFormInput, PetUncheckedUpdateWithoutRequestFormInput>
    create: XOR<PetCreateWithoutRequestFormInput, PetUncheckedCreateWithoutRequestFormInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutRequestFormInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutRequestFormInput, PetUncheckedUpdateWithoutRequestFormInput>
  }

  export type PetUpdateWithoutRequestFormInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutPetNestedInput
    Vaccine?: VaccineUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutRequestFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    Vaccine?: VaccineUncheckedUpdateManyWithoutPetNestedInput
  }

  export type VaccineCreateManyPetInput = {
    id?: number
    vaccine?: string | null
  }

  export type RequestFormCreateManyPetInput = {
    id?: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    userId: number
  }

  export type VaccineUpdateWithoutPetInput = {
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VaccineUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VaccineUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaccine?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestFormUpdateWithoutPetInput = {
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutRequestFormNestedInput
  }

  export type RequestFormUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFormUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PetCreateManyUserInput = {
    id?: number
    name: string
    type: $Enums.Type
    gender: $Enums.Gender
    pictureUrl: string
    color?: string | null
    dateOfBirth?: Date | string | null
    ageYear?: number | null
    ageMonth?: number | null
    breed?: string | null
    phoneNumber: string
    address: string
    vacineUrl?: string | null
  }

  export type RequestFormCreateManyUserInput = {
    id?: number
    houseEn: $Enums.HouseEn
    financial: $Enums.Financial
    pickup: $Enums.Pickup
    addressRequest: string
    petId: number
  }

  export type PetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Vaccine?: VaccineUpdateManyWithoutPetNestedInput
    RequestForm?: RequestFormUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Vaccine?: VaccineUncheckedUpdateManyWithoutPetNestedInput
    RequestForm?: RequestFormUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pictureUrl?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ageYear?: NullableIntFieldUpdateOperationsInput | number | null
    ageMonth?: NullableIntFieldUpdateOperationsInput | number | null
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    vacineUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestFormUpdateWithoutUserInput = {
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    Pet?: PetUpdateOneRequiredWithoutRequestFormNestedInput
  }

  export type RequestFormUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type RequestFormUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    houseEn?: EnumHouseEnFieldUpdateOperationsInput | $Enums.HouseEn
    financial?: EnumFinancialFieldUpdateOperationsInput | $Enums.Financial
    pickup?: EnumPickupFieldUpdateOperationsInput | $Enums.Pickup
    addressRequest?: StringFieldUpdateOperationsInput | string
    petId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}